import { webConfig } from '@/config/web';
import { LightbulbIcon } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-4 px-8 md:gap-2 md:px-0">
          <LightbulbIcon className="hidden h-4 w-4 sm:block" />
          <p className="text-center text-sm leading-tight text-muted-foreground md:text-left">
            Fun fact: {webConfig.name} is open source!{' '}
            <Link
              className="font-medium underline underline-offset-4"
              href={webConfig.links.github}
              target="_blank"
            >
              View on GitHub
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
