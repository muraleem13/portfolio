import { useState } from "react";
import { HERO_SOCIAL_LINKS } from "@/utils/portfolioData";
import { scrollToSection } from "@/utils/scroll";

interface HeroSectionProps {
  onResumeDownload: () => void;
}

export function HeroSection({ onResumeDownload }: HeroSectionProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);
  const profileImageUrl = `${import.meta.env.BASE_URL}assets/images/profile-photo.jpg`;
  const resumeUrl = `${import.meta.env.BASE_URL}assets/resume/Resume_Murali_Munireddy.pdf`;

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="profile-photo-container">
            <div className="profile-photo" id="profile-photo">
              {!isImageLoaded && !hasImageError && (
                <div className="photo-loading" id="photo-loading">
                  <i className="fas fa-spinner fa-spin" />
                  <span>Loading...</span>
                </div>
              )}

              <img
                src={profileImageUrl}
                alt="Murali Munireddy - Data Software Engineer"
                id="profile-img"
                loading="eager"
                onLoad={() => setIsImageLoaded(true)}
                onError={() => {
                  setHasImageError(true);
                  setIsImageLoaded(false);
                }}
                style={{ display: hasImageError ? "none" : "block" }}
              />

              {hasImageError && (
                <div className="photo-placeholder" id="photo-placeholder">
                  <i className="fas fa-user" />
                  <span>Photo Coming Soon</span>
                </div>
              )}
            </div>
          </div>

          <h1 className="hero-title">
            Hi, I&apos;m <span className="highlight">Murali Munireddy</span>
          </h1>
          <h2 className="hero-subtitle">Software Engineer</h2>
          <p className="hero-description">
            <span title="Data Engineering">
              <i className="fas fa-database" /> Data Engineering
            </span>{" "}
            &amp;{" "}
            <span title="Analytics">
              <i className="fas fa-chart-line" /> Data Analytics
            </span>
            , <span title="Backend Development"><i className="fas fa-code" /> Backend Development</span>,
            <br />
            <span title="Cloud Platforms" style={{ whiteSpace: "nowrap" }}>
              <i className="fas fa-cloud" /> AWS, Azure
            </span>
            ,{" "}
            <span title="Microservices">
              <i className="fas fa-cubes" /> Microservices
            </span>
            ,{" "}
            <span title="DevOps">
              <i className="fas fa-cogs" /> DevOps
            </span>
            ,{" "}
            <span title="APIs">
              <i className="fas fa-plug" /> APIs
            </span>
            ,{" "}
            <span title="AI/ML">
              <i className="fas fa-brain" /> AI/ML
            </span>
          </p>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("projects");
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("contact");
              }}
            >
              Get In Touch
            </a>
            <a
              href={resumeUrl}
              className="btn btn-resume"
              download="Murali_Munireddy_Resume.pdf"
              onClick={onResumeDownload}
            >
              <i className="fas fa-download" />
              Download Resume
            </a>
          </div>

          <div className="social-links">
            {HERO_SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="social-link"
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

      <div className="hero-scroll">
        <a
          href="#about"
          className="scroll-down"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("about");
          }}
        >
          <i className="fas fa-chevron-down" />
        </a>
      </div>
    </section>
  );
}
