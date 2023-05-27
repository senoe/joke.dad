'use server';

import { prisma } from '@/server/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { zfd } from 'zod-form-data';

const voteSchema = zfd.formData({
  id: zfd.numeric(z.number().int().positive())
});

export async function randomJoke() {
  revalidatePath('/');
}

export async function upvote(formData: FormData) {
  const { id } = voteSchema.parse(formData);
  await prisma.joke.update({
    where: { id },
    data: { score: { increment: 1 } }
  });
}

export async function downvote(formData: FormData) {
  const { id } = voteSchema.parse(formData);
  await prisma.joke.update({
    where: { id },
    data: { score: { decrement: 1 } }
  });
}
