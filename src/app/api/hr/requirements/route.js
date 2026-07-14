import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const hrId = searchParams.get('hrId');

    if (!hrId) {
      return NextResponse.json({ error: 'hrId is required' }, { status: 400 });
    }

    const requirements = await prisma.hiringRequirement.findMany({
      where: { hrId: parseInt(hrId) },
      include: {
        referrals: {
          include: {
            student: {
              select: {
                id: true,
                name: true,
                email: true
              }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(requirements);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { title, description, hrId } = await req.json();

    if (!title || !description || !hrId) {
      return NextResponse.json({ error: 'Title, description, and hrId are required' }, { status: 400 });
    }

    const newReq = await prisma.hiringRequirement.create({
      data: {
        title,
        description,
        hrId: parseInt(hrId)
      },
      include: {
        referrals: true
      }
    });

    return NextResponse.json(newReq, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
