import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PUT(req, { params }) {
  try {
    const { courseId } = await params;
    const body = await req.json();
    console.log("BODY IS: ", body);
    const { sessionId, meetLink } = body;

    if (!sessionId || isNaN(Number(sessionId))) {
      return NextResponse.json({ error: "Invalid sessionId: " + sessionId }, { status: 400 });
    }

    const session = await prisma.session.update({
      where: { id: Number(sessionId) },
      data: { meetLink: meetLink || null }
    });

    return NextResponse.json(session);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
