import { Prisma } from '.prisma/client';
import { RandomJokeButton } from '@/components/random-joke-button';
import { ShareJokeButton } from '@/components/share-joke-button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { VoteContainer } from '@/components/vote-container';
import { cn } from '@/lib/utils';
import { prisma } from '@/server/db';
import { type Joke } from '@prisma/client';
import { notFound } from 'next/navigation';
import sql = Prisma.sql;

interface JokeCardProps {
  id?: number;
}

export async function JokeCard({ id }: JokeCardProps) {
  const joke = await getJoke(id);
  if (!joke) notFound();
  return (
    <Card className="max-w-xl sm:w-[36rem]">
      <CardHeader className="flex-row justify-between space-y-0">
        <div>
          <CardTitle>{joke.name}</CardTitle>
          <CardDescription>
            Joke #{joke.id} &bull; Added{' '}
            {new Date(joke.createdAt).toLocaleDateString()}
          </CardDescription>
        </div>
        <VoteContainer id={joke.id} count={joke.score} />
      </CardHeader>
      <CardContent>
        <p className="leading-snug">{joke.content}</p>
      </CardContent>
      <CardFooter className={cn('grid gap-2', !id && 'sm:grid-cols-2')}>
        {!id && <RandomJokeButton />}
        <ShareJokeButton id={joke.id} />
      </CardFooter>
    </Card>
  );
}

export const getJoke = async (id?: number) => {
  if (id) {
    return prisma.joke.findUnique({ where: { id } });
  }
  const result: Joke[] = await prisma.$queryRaw(
    sql`SELECT * FROM Joke ORDER BY RAND() LIMIT 1`
  );
  return result[0];
};
