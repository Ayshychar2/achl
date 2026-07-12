import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { userId, sessionId } = await req.json();

    const session = await prisma.session.findUnique({
      where: { id: parseInt(sessionId) }
    });

    if (!session || !session.meetLink) {
      return NextResponse.json({ error: 'Session not available yet.' }, { status: 400 });
    }

    // Upsert student progress
    await prisma.studentProgress.upsert({
      where: {
        userId_sessionId: {
          userId: parseInt(userId),
          sessionId: parseInt(sessionId)
        }
      },
      update: {
        completed: true,
        completedAt: new Date()
      },
      create: {
        userId: parseInt(userId),
        sessionId: parseInt(sessionId),
        completed: true,
        completedAt: new Date()
      }
    });

    return NextResponse.json({ meetLink: session.meetLink }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
