import {
  useEffect,
  useMemo,
  useRef,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent
} from "react";
import { useTheme } from "@/app/ThemeProvider";
import { useNotification } from "@/app/NotificationProvider";
import { NAV_ITEMS } from "@/utils/portfolioData";
import { scrollToSection } from "@/utils/scroll";
import type { SectionId } from "@/types/portfolio";

interface NavbarProps {
  activeSection: SectionId;
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
}

export function Navbar({
  activeSection,
  isScrolled,
  isMobileMenuOpen,
  onToggleMobileMenu,
  onCloseMobileMenu
}: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const { notify } = useNotification();
  const navbarRef = useRef<HTMLElement>(null);
  const navMenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (!isMobileMenuOpen || !navbarRef.current) {
        return;
      }

      if (!navbarRef.current.contains(event.target as Node)) {
        onCloseMobileMenu();
      }
    };

    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, [isMobileMenuOpen, onCloseMobileMenu]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        onCloseMobileMenu();
      }
    };

    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [isMobileMenuOpen, onCloseMobileMenu]);

  const themeIconClass = useMemo(() => (theme === "dark" ? "fas fa-sun" : "fas fa-moon"), [theme]);
  const nextThemeLabel = theme === "dark" ? "Light theme activated." : "Dark theme activated.";

  const handleNavLinkClick = (event: ReactMouseEvent<HTMLAnchorElement>, sectionId: SectionId) => {
    event.preventDefault();
    scrollToSection(sectionId);
    onCloseMobileMenu();
  };

  const handleMenuKeyDown = (event: ReactKeyboardEvent<HTMLUListElement>) => {
    if (event.key !== "Tab" || !isMobileMenuOpen || !navMenuRef.current) {
      return;
    }

    const focusable = navMenuRef.current.querySelectorAll<HTMLElement>(
      "a, button, input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );

    if (!focusable.length) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      last.focus();
      event.preventDefault();
    } else if (!event.shiftKey && document.activeElement === last) {
      first.focus();
      event.preventDefault();
    }
  };

  return (
    <nav className={`navbar${isScrolled ? " scrolled" : ""}`} id="navbar" ref={navbarRef}>
      <div className="nav-container">
        <a
          href="#home"
          className="nav-logo"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("home");
            onCloseMobileMenu();
          }}
        >
          Murali Munireddy
        </a>

        <ul
          className={`nav-menu${isMobileMenuOpen ? " active" : ""}`}
          id="nav-menu"
          ref={navMenuRef}
          onKeyDown={handleMenuKeyDown}
        >
          {NAV_ITEMS.map((item) => (
            <li className="nav-item" key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link${activeSection === item.id ? " active" : ""}`}
                onClick={(event) => handleNavLinkClick(event, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
          <button
            type="button"
            className="theme-toggle"
            id="theme-toggle"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => {
              toggleTheme();
              notify(nextThemeLabel, "success");
            }}
          >
            <i className={themeIconClass} id="theme-icon" />
          </button>

          <button
            type="button"
            className={`nav-toggle${isMobileMenuOpen ? " active" : ""}`}
            id="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="nav-menu"
            aria-label="Toggle navigation menu"
            onClick={onToggleMobileMenu}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </div>
    </nav>
  );
}
