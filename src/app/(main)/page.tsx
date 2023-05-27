import { JokeCard } from '@/components/joke-card';
import { webConfig } from '@/config/web';
import { type Metadata } from 'next';
import Balancer from 'react-wrap-balancer';

export const metadata: Metadata = { title: 'The best dad jokes' };

export default function HomePage() {
  return (
    <>
      <div className="space-y-3 text-center">
        <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
          {webConfig.name}
        </h1>
        <Balancer ratio={0.75} as="p">
          {webConfig.description}
        </Balancer>
      </div>
      {/* @ts-ignore-error React server component */}
      <JokeCard />
    </>
  );
}
