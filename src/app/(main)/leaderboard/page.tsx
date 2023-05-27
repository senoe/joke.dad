import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { prisma } from '@/server/db';
import { ArrowUpIcon } from 'lucide-react';
import { unstable_cache as cache } from 'next/cache';

export default async function LeaderboardPage() {
  const getTopJokes = cache(
    async () =>
      prisma.joke.findMany({
        orderBy: { score: 'desc' },
        take: 5
      }),
    [],
    { revalidate: 900 }
  );
  const jokes = await getTopJokes();
  return (
    <>
      <div className="space-y-3 text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Leaderboard
        </h1>
        <p>The top 5 jokes with the most votes!</p>
      </div>
      <Table>
        <TableCaption>Tip: Hover over a row to see the joke!</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Votes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jokes.map((joke) => (
            <HoverCard>
              <HoverCardTrigger asChild>
                <TableRow>
                  <TableCell>#{joke.id}</TableCell>
                  <TableCell>
                    {new Date(joke.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="font-medium">{joke.name}</TableCell>
                  <TableCell className="flex items-center">
                    <ArrowUpIcon className="mr-1 h-4 w-4" />
                    {joke.score}
                  </TableCell>
                </TableRow>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">
                      #{joke.id} &mdash; {joke.name}
                    </h4>
                    <p className="text-sm">{joke.content}</p>
                    <div className="flex items-center pt-2">
                      <span className="text-xs text-muted-foreground">
                        Added {new Date(joke.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
