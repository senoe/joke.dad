'use client';

import { randomJoke } from '@/app/(main)/_actions';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2Icon, ShuffleIcon } from 'lucide-react';
import { startTransition } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export function RandomJokeButton() {
  const { pending } = useFormStatus();
  const Icon = pending ? Loader2Icon : ShuffleIcon;
  return (
    <Button
      onClick={() => startTransition(() => void randomJoke())}
      className="w-full bg-sky-500 hover:bg-sky-600"
      disabled={pending}
    >
      <Icon className={cn('mr-2 h-4 w-4', pending && 'animate-spin')} />
      Give me another one!
    </Button>
  );
}
