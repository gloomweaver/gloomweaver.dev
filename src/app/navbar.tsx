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
    <NavigationMenu.Item className={cn('relative px-2 py-2 hover:opacity-50')} key={link.href}>
      {isActive && (
        <motion.div className={cn('absolute inset-0 rounded-full bg-white mix-blend-exclusion')}></motion.div>
      )}
      <Link href={link.href} legacyBehavior passHref>
        <NavigationMenu.Link active={isActive}>{link.label}</NavigationMenu.Link>
      </Link>
    </NavigationMenu.Item>
  );
};

export const Navbar: React.FC = () => {
  return (
    <NavigationMenu.Root className={cn('mx-auto max-w-5xl')}>
      <NavigationMenu.List className={cn('flex space-x-3')}>
        {LINKS.map((link) => (
          <NavLink link={link} key={link.href} />
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
