import { type ClassValue, clsx } from 'clsx';
import { pipe } from 'remeda';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return pipe(inputs, clsx, twMerge);
}
