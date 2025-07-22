import { useEffect, useState } from 'react';

// Intersection observer based hook to detect which section is active
export const useScrollSpy = (sectionIds: string[], offset = 0) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              console.log('[scroll-spy] active section:', id); // signature log
              setActiveId(id);
            }
          }
        });
      },
      { rootMargin: `0px 0px -${window.innerHeight - offset - 1}px 0px`, threshold: 0 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
};
