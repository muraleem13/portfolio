import { scrollToTop } from "@/utils/scroll";

interface BackToTopButtonProps {
  visible: boolean;
}

export function BackToTopButton({ visible }: BackToTopButtonProps) {
  return (
    <button
      type="button"
      id="back-to-top"
      className={`back-to-top${visible ? " visible" : ""}`}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <i className="fas fa-chevron-up" />
    </button>
  );
}
