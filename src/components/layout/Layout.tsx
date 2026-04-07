import { useEffect, useMemo, useState, type ReactNode } from "react";
import { BackToTopButton } from "@/components/layout/BackToTopButton";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { NAV_ITEMS } from "@/utils/portfolioData";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);
  const { activeSection, isNavbarScrolled, isBackToTopVisible } = useScrollSpy(sectionIds);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMobileMenuOpen]);

  return (
    <>
      <Navbar
        activeSection={activeSection}
        isScrolled={isNavbarScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen((value) => !value)}
        onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
      />
      <main>{children}</main>
      <Footer />
      <BackToTopButton visible={isBackToTopVisible} />
    </>
  );
}
