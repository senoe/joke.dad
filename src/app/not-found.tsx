import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function NotFoundPage() {
  return (
    <div className="space-y-4 text-center">
      <div>
        <h1 className="text-9xl font-black">404</h1>
        <p className="text-2xl font-bold tracking-tight sm:text-4xl">Uh-oh!</p>
      </div>
      <p className="text-muted-foreground">We couldn&apos;t find that page.</p>
      <a className={cn(buttonVariants(), 'group px-12')} href="/">
        <span
          className="mr-1.5 inline-block translate-x-0 transition-transform duration-200 ease-in-out group-hover:-translate-x-0.5"
          aria-hidden={true}
        >
          &larr;
        </span>
        Return home
      </a>
    </div>
  );
}
