'use client';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Container } from '@/components/layout/container';
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
  {
    label: 'About',
    href: '/about',
  },
];

const NavLink: React.FC<{ link: LinkItem }> = ({ link }) => {
  const path = usePathname();
  const isActive = path === link.href;

  return (
    <NavigationMenu.Item
      className={cn(
        'relative',
        !isActive && 'focus-within:outline focus-within:outline-1 focus-within:outline-white hover:opacity-50'
      )}
      key={link.href}
    >
      {isActive && (
        <motion.div
          layoutId="pill"
          className={cn('absolute inset-0 rounded-full bg-white mix-blend-exclusion')}
          style={{ borderRadius: '9999px' }}
        />
      )}
      <Link href={link.href} legacyBehavior passHref>
        <NavigationMenu.Link
          className={cn('px-3 py-2 focus:outline-none')}
          active={isActive}
          tabIndex={isActive ? -1 : undefined}
        >
          {link.label}
        </NavigationMenu.Link>
      </Link>
    </NavigationMenu.Item>
  );
};

export const Navbar: React.FC = () => {
  return (
    <div className={cn('border-b-2 border-b-neutral-700 bg-black')}>
      <Container>
        <NavigationMenu.Root className={cn('flex select-none items-center p-4')}>
          <h1 className={cn('mr-5')}>gloomweaver.dev</h1>
          <NavigationMenu.List className={cn('flex space-x-3')}>
            {LINKS.map((link) => (
              <NavLink link={link} key={link.href} />
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </Container>
    </div>
  );
};
