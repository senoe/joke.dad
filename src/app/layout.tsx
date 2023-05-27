import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import { webMetadata } from '@/config/web';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Inter as FontSans } from 'next/font/google';
import { type PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata = webMetadata;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="container my-8 flex flex-1 items-center justify-center">
            <div className="flex flex-col items-center space-y-8">
              {children}
            </div>
          </main>
          <Footer />
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
