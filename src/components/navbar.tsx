'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type LinkItem = {
  label: string;
  href: string;
};

const LINKS: LinkItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

const NavLink: React.FC<{ link: LinkItem }> = ({ link }) => {
  const path = usePathname();
  const isActive = path === link.href;

  return (
    <NavigationMenu.Item className={cn('relative px-2 py-1', !isActive && 'hover:opacity-50')} key={link.href}>
      {isActive && (
        <motion.div
          layoutId="pill"
          className={cn('absolute inset-0 rounded-full bg-white mix-blend-exclusion')}
          style={{ borderRadius: '9999px' }}
        />
      )}
      <Link href={link.href} legacyBehavior passHref>
        <NavigationMenu.Link active={isActive}>{link.label}</NavigationMenu.Link>
      </Link>
    </NavigationMenu.Item>
  );
};

export const Navbar: React.FC = () => {
  return (
    <NavigationMenu.Root className={cn('mx-auto flex items-center px-2 py-2 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl')}>
      <h1 className={cn('mr-5')}>gloomweaver.dev</h1>
      <NavigationMenu.List className={cn('flex space-x-3')}>
        {LINKS.map((link) => (
          <NavLink link={link} key={link.href} />
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
