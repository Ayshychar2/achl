import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function DELETE(req, { params }) {
  try {
    const { courseId } = await params;
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('sessionId');

    if (!sessionId || isNaN(Number(sessionId))) {
      return NextResponse.json({ error: "Invalid sessionId" }, { status: 400 });
    }

    // Also delete any progress associated with this session
    await prisma.studentProgress.deleteMany({
      where: { sessionId: Number(sessionId) }
    });

    const session = await prisma.session.delete({
      where: { id: Number(sessionId) }
    });

    return NextResponse.json(session);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
