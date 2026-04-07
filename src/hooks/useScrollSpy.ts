import { useEffect, useState } from "react";
import type { SectionId } from "@/types/portfolio";

interface ScrollSpyState {
  activeSection: SectionId;
  isNavbarScrolled: boolean;
  isBackToTopVisible: boolean;
}

const DEFAULT_SECTION: SectionId = "home";

export function useScrollSpy(sectionIds: SectionId[]): ScrollSpyState {
  const [state, setState] = useState<ScrollSpyState>({
    activeSection: DEFAULT_SECTION,
    isNavbarScrolled: false,
    isBackToTopVisible: false
  });

  useEffect(() => {
    let ticking = false;

    const updateState = () => {
      const isNavbarScrolled = window.scrollY > 50;
      const isBackToTopVisible = window.scrollY > 300;
      let activeSection = DEFAULT_SECTION;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) {
          return;
        }

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          activeSection = id;
        }
      });

      setState({ activeSection, isNavbarScrolled, isBackToTopVisible });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateState);
        ticking = true;
      }
    };

    updateState();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionIds]);

  return state;
}
