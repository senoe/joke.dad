'use client';

import { webConfig } from '@/config/web';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Leaderboard', href: '/leaderboard' }
];

export function Navigation() {
  const pathname = usePathname();
  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image src="/icon.png" height={24} width={24} alt="" />
        <span className="inline-block font-bold">{webConfig.name}</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {links.map(({ name, href }) => (
          <Link
            key={name}
            href={href}
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname === href ? 'text-foreground' : 'text-foreground/60'
            )}
          >
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
