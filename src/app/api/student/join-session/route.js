import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { userId, sessionId } = await req.json();

    const progress = await prisma.studentProgress.findUnique({
      where: {
        userId_sessionId: {
          userId: parseInt(userId),
          sessionId: parseInt(sessionId)
        }
      }
    });

    if (!progress || !progress.meetLink) {
      return NextResponse.json({ error: 'Session not available yet.' }, { status: 400 });
    }

    // Update student progress to completed
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

    return NextResponse.json({ meetLink: progress.meetLink }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
