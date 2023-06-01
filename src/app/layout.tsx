import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';

import { Navbar } from '@/components/layout/navbar';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-neutral-900 text-white')}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
