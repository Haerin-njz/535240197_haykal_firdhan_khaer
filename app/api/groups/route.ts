import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name } = body;

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }

    const newGroup = await prisma.kpopGroup.create({
      data: {
        name,
      },
    });
    return NextResponse.json(newGroup);
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function GET() {
  try {
    const groups = await prisma.kpopGroup.findMany();
    return NextResponse.json(groups);
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}