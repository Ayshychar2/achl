import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req, { params }) {
  try {
    const { courseId } = await params;
    const body = await req.json();
    const { title } = body;

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    // Get the maximum order for the course's sessions
    const existingSessions = await prisma.session.findMany({
      where: { courseId: Number(courseId) },
      orderBy: { order: 'desc' },
      take: 1
    });

    const nextOrder = existingSessions.length > 0 ? existingSessions[0].order + 1 : 1;

    const newSession = await prisma.session.create({
      data: {
        title,
        order: nextOrder,
        course: { connect: { id: Number(courseId) } }
      }
    });

    return NextResponse.json(newSession);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
