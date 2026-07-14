import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    // Get all courses the user is enrolled in
    const enrollments = await prisma.enrollment.findMany({
      where: { userId: parseInt(userId) },
      select: { courseId: true }
    });

    const enrolledCourseIds = enrollments.map(e => e.courseId);

    // Get courses the user is NOT enrolled in
    const availableCourses = await prisma.course.findMany({
      where: {
        id: {
          notIn: enrolledCourseIds
        }
      }
    });

    return NextResponse.json(availableCourses);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
