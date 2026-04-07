import { FOOTER_SOCIAL_LINKS } from "@/utils/portfolioData";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {year} Murali Munireddy. All rights reserved.</p>
          <div className="footer-links">
            {FOOTER_SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="footer-link"
                aria-label={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <i className={link.iconClass} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
