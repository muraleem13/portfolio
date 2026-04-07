import { CERTIFICATIONS } from "@/utils/portfolioData";

export function CertificationsSection() {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications &amp; Accreditations</h2>
        <div className="cert-grid">
          {CERTIFICATIONS.map((cert) => (
            <div className="cert-item" key={cert.title}>
              <div className="cert-icon">
                <i className={cert.iconClass} />
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-description">{cert.description}</p>
                <div className="cert-badge">
                  <i className="fas fa-certificate" />
                  <span>{cert.badge}</span>
                </div>
                <div className="cert-links">
                  <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt" />
                    View Certification
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
