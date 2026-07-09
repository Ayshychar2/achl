import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, currentPassword, newPassword } = await req.json();

    if (!email || !currentPassword || !newPassword) {
      return NextResponse.json({ error: 'Email, current password, and new password are required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(currentPassword, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ error: 'Incorrect current password' }, { status: 401 });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { email },
      data: { password: hashedNewPassword }
    });

    return NextResponse.json({ message: 'Password updated successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
