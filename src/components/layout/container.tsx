import { cn } from '@/lib/utils';

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className={cn('container mx-auto')}>{children}</div>
);
