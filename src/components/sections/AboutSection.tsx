import { HIGHLIGHTS } from "@/utils/portfolioData";

interface AboutSectionProps {
  onResumeDownload: () => void;
}

export function AboutSection({ onResumeDownload }: AboutSectionProps) {
  const resumeUrl = `${import.meta.env.BASE_URL}assets/resume/Resume_Murali_Munireddy.pdf`;

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I&apos;m a passionate Software Engineer currently working at EPAM Systems (client: Goldman Sachs Group, Inc.) with
              over 4 years of experience in designing and developing scalable data engineering solutions, analytics platforms,
              and backend systems.
            </p>
            <p>
              My expertise spans cloud-native architectures on AWS and Azure, big data technologies such as Spark and Hadoop,
              and modern data warehousing solutions. I also have strong experience in backend development, with proficiency in
              Python and Java.
            </p>
            <p>
              I&apos;m driven by a deep interest in leveraging cutting-edge technologies, particularly in AI and machine
              learning, to solve complex data challenges and deliver actionable, data-driven insights that create real
              business impact.
            </p>

            <div className="about-highlights">
              {HIGHLIGHTS.map((highlight) => (
                <div className="highlight-item" key={highlight.text}>
                  <i className={highlight.iconClass} />
                  <span>{highlight.text}</span>
                </div>
              ))}
            </div>

            <div className="resume-section">
              <h3>Professional Resume</h3>
              <p>Download my complete resume with detailed work experience, skills, and achievements.</p>
              <div className="resume-download-container">
                <a
                  href={resumeUrl}
                  className="resume-download-btn-single"
                  download="Murali_Munireddy_Resume.pdf"
                  onClick={onResumeDownload}
                >
                  <i className="fas fa-file-pdf" />
                  <span>Download PDF Resume</span>
                  <small>Complete professional document</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
