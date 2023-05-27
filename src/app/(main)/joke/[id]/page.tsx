import { JokeCard } from '@/components/joke-card';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = { title: 'Joke' };

interface JokePageProps {
  params: { id: string };
}

export default function JokePage({ params: { id } }: JokePageProps) {
  const numericId = parseInt(id);
  if (!numericId) notFound();
  // @ts-ignore-error React server component
  return <JokeCard id={numericId} />;
}
