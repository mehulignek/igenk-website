// hooks/useInView.ts
'use client';

import { useState, useEffect, useRef } from 'react';

export function useInView(options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Trigger when the element is intersecting
      if (entry) {
        setIsInView(entry.isIntersecting);
      }
    }, {
      threshold: 0.5, // Trigger when 50% of the element is visible
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isInView] as const;
}