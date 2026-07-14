import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { hiringRequirementId, studentId } = await req.json();

    if (!hiringRequirementId || !studentId) {
      return NextResponse.json({ error: 'hiringRequirementId and studentId are required' }, { status: 400 });
    }

    // Check if already referred
    const existing = await prisma.referredStudent.findFirst({
      where: {
        hiringRequirementId: parseInt(hiringRequirementId),
        studentId: parseInt(studentId)
      }
    });

    if (existing) {
      return NextResponse.json({ error: 'Student already referred to this requirement' }, { status: 400 });
    }

    const referral = await prisma.referredStudent.create({
      data: {
        hiringRequirementId: parseInt(hiringRequirementId),
        studentId: parseInt(studentId)
      }
    });

    return NextResponse.json(referral, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
