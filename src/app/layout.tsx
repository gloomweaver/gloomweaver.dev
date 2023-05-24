import '@/styles/globals.css';

import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kirill Khramkov - Software Engineer',
  description: 'Portfolio site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
