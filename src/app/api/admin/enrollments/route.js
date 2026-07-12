import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { userId, courseId } = await req.json();
    
    const enrollment = await prisma.enrollment.create({
      data: {
        userId: parseInt(userId),
        courseId: parseInt(courseId)
      }
    });
    
    return NextResponse.json(enrollment, { status: 201 });
  } catch (error) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Student is already enrolled in this course.' }, { status: 400 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
