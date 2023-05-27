import { prisma } from '@/server/db';
import { NextResponse } from 'next/server';

// For testing purposes
export async function _GET() {
  const jokes = await prisma.joke.findMany({
    select: { name: true, content: true }
  });
  return NextResponse.json(jokes);
}
