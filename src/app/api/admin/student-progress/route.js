import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PUT(req) {
  try {
    const { userId, sessionId, meetLink } = await req.json();

    if (!userId || !sessionId) {
      return NextResponse.json({ error: 'Missing userId or sessionId' }, { status: 400 });
    }

    const progress = await prisma.studentProgress.upsert({
      where: {
        userId_sessionId: {
          userId: parseInt(userId),
          sessionId: parseInt(sessionId)
        }
      },
      update: {
        meetLink: meetLink || null
      },
      create: {
        userId: parseInt(userId),
        sessionId: parseInt(sessionId),
        meetLink: meetLink || null,
        completed: false
      }
    });

    return NextResponse.json(progress, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
