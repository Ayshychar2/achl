import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, subject, message } = data;

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const newMsg = await prisma.contactMessage.create({
      data: {
        firstName,
        lastName,
        email,
        subject,
        message
      }
    });

    return NextResponse.json(newMsg, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
