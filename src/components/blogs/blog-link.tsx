import { type ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

// This is a placeholder component that can be replaced with your routing solution
export function Link({ href, children, className }: LinkProps) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}