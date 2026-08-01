import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function FadeIn({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useIntersectionObserver();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
