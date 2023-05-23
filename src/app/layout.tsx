import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import { Navbar } from '@/app/navbar';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kirill Khramkov - Software Engineer',
  description: 'Portfolio site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'dark:bg-stone-900 text-white')}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
