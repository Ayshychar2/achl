import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { userId, courseId } = await req.json();

    if (!userId || !courseId) {
      return NextResponse.json({ error: 'userId and courseId are required' }, { status: 400 });
    }

    // Check if already enrolled
    const existing = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: parseInt(userId),
          courseId: parseInt(courseId)
        }
      }
    });

    if (existing) {
      return NextResponse.json({ error: 'Already enrolled in this course' }, { status: 400 });
    }

    const newEnrollment = await prisma.enrollment.create({
      data: {
        userId: parseInt(userId),
        courseId: parseInt(courseId)
      }
    });

    return NextResponse.json(newEnrollment, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
