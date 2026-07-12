import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'UserId is required' }, { status: 400 });
    }

    // Get courses the student is enrolled in, with sessions and progress
    const enrollments = await prisma.enrollment.findMany({
      where: { userId: parseInt(userId) },
      include: {
        course: {
          include: {
            sessions: {
              orderBy: { order: 'asc' },
              include: {
                progresses: {
                  where: { userId: parseInt(userId) }
                }
              }
            }
          }
        }
      }
    });

    return NextResponse.json(enrollments);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
