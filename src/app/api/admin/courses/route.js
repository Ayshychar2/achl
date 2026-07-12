import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        sessions: {
          orderBy: { order: 'asc' }
        },
        enrollments: {
          include: { 
            user: {
              include: { studentProgress: true }
            }
          }
        }
      }
    });
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { title, description } = await req.json();
    
    // Create course and its 8 sessions automatically
    const course = await prisma.course.create({
      data: {
        title,
        description,
        sessions: {
          create: Array.from({ length: 8 }).map((_, i) => ({
            title: `Session ${i + 1}`,
            order: i + 1,
          }))
        }
      }
    });
    
    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
