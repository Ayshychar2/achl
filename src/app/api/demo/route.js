import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Using executeRawUnsafe to bypass Prisma client generation lock on Windows
    await prisma.$executeRawUnsafe(
      'INSERT INTO DemoRequest (name, email, createdAt) VALUES (?, ?, CURRENT_TIMESTAMP)',
      name,
      email
    );

    return NextResponse.json({ message: 'Demo request received successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
