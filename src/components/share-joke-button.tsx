'use client';

import { Button } from '@/components/ui/button';
import { ClipboardCopyIcon } from 'lucide-react';
import toast from 'react-hot-toast';

interface ShareJokeButtonProps {
  id: number;
}

export function ShareJokeButton({ id }: ShareJokeButtonProps) {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(`${window.location.host}/joke/${id}`)
      .then(() => {
        toast.success('Share link copied to your clipboard!');
      });
  };
  return (
    <Button
      className="w-full border border-input"
      onClick={copyToClipboard}
      variant="secondary"
      type="button"
    >
      <ClipboardCopyIcon className="mr-2 h-4 w-4" />
      Copy share link
    </Button>
  );
}
