import GitHubIcon from '@/components/icons/github-icon';
import { buttonVariants } from '@/components/ui/button';
import { Navigation } from '@/components/ui/navigation';
import { webConfig } from '@/config/web';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Header() {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
      <div className="container flex h-14 items-center">
        <Navigation />
        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href={webConfig.links.github} target="_blank">
              <div
                className={cn(
                  buttonVariants({
                    size: 'sm',
                    variant: 'ghost'
                  }),
                  'w-9 px-0'
                )}
              >
                <GitHubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
