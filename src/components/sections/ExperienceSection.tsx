import { EXPERIENCE } from "@/utils/portfolioData";

export function ExperienceSection() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {EXPERIENCE.map((item) => (
            <div className="timeline-item" key={`${item.company}-${item.date}`}>
              <div className="timeline-dot" />
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-content">
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <ul className="timeline-description">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
