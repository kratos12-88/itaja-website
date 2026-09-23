'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('is-visible');
            if (el.dataset.revealOnce !== 'false') observer.unobserve(el);
          } else if ((entry.target as HTMLElement).dataset.revealOnce === 'false') {
            (entry.target as HTMLElement).classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -7% 0px' }
    );

    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return null;
}
