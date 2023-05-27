/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import { downvote, upvote } from '@/app/(main)/_actions';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

type VoteStatus = 'upvote' | 'downvote' | 'neutral';

interface VoteContainerProps {
  id: number;
  count: number;
}

export function VoteContainer({ id, count }: VoteContainerProps) {
  const [status, setStatus] = useState<VoteStatus>('neutral');
  const addend = status === 'upvote' ? 1 : status === 'downvote' ? -1 : 0;

  const updateVote = async (formData: FormData, actionStatus: VoteStatus) => {
    if (actionStatus !== 'neutral') {
      setStatus(actionStatus);
      const up = actionStatus === 'upvote';
      await (up ? upvote : downvote)(formData);
      toast.success(
        `Successfully ${up ? 'upvoted' : 'downvoted'} joke #${id}!`
      );
    }
  };

  useEffect(() => setStatus('neutral'), [id]);

  return (
    <form className="flex items-center space-x-3">
      <input name="id" value={id} readOnly={true} hidden={true} />
      <Button
        formAction={(formData) => updateVote(formData, 'upvote')}
        className={cn(
          'h-8.5 rounded-full px-2',
          status === 'upvote' && 'bg-emerald-100'
        )}
        disabled={status !== 'neutral'}
        variant="outline"
      >
        <ChevronUpIcon className="h-4 w-4" />
      </Button>
      <span className="rounded-md border border-input px-2 pb-0.5 text-xl font-bold shadow-sm dark:bg-card-foreground">
        {(count + addend).toLocaleString()}
      </span>
      <Button
        formAction={(formData) => updateVote(formData, 'downvote')}
        className={cn(
          'h-8.5 rounded-full px-2',
          status === 'downvote' && 'bg-red-100'
        )}
        disabled={status !== 'neutral'}
        variant="outline"
      >
        <ChevronDownIcon className="h-4 w-4" />
      </Button>
    </form>
  );
}
