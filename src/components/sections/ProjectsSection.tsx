import { memo } from "react";
import { PROJECTS } from "@/utils/portfolioData";
import type { ProjectItem } from "@/types/portfolio";

const ProjectCard = memo(function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <i className={project.iconClass} />
        <h3 className="project-title">{project.title}</h3>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((techTag) => (
          <span className="tech-tag" key={techTag}>
            {techTag}
          </span>
        ))}
      </div>
      <div className="project-links">
        {project.links.map((link) =>
          link.disabled ? (
            <span className="project-link disabled" key={link.label}>
              <i className={link.iconClass} />
              {link.label}
            </span>
          ) : (
            <a
              href={link.href}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
              key={link.label}
            >
              <i className={link.iconClass} />
              {link.label}
            </a>
          )
        )}
      </div>
    </div>
  );
});

export function ProjectsSection() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
