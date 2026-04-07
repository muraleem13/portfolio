import { useEffect } from "react";

const REVEAL_SELECTOR = ".skill-category, .project-card, .timeline-item, .cert-item, .highlight-item, .profile-photo";

export function useRevealAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    elements.forEach((element) => {
      element.classList.add("fade-in");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}
