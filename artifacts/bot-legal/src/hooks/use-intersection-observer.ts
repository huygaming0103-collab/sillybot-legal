import { useEffect, useRef } from 'react';

export function useIntersectionObserver(options = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-8');
      }
    }, { threshold: 0.1, ...options });

    const currentElement = elementRef.current;
    if (currentElement) {
      currentElement.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-8');
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return elementRef;
}
