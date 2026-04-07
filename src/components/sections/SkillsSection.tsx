import { memo } from "react";
import { SKILL_CATEGORIES } from "@/utils/portfolioData";
import type { SkillCategory } from "@/types/portfolio";

const SkillCategoryCard = memo(function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <div className="skill-category">
      <h3 className="skill-title">
        <i className={category.iconClass} />
        {category.title}
      </h3>
      <div className="skill-tags">
        {category.tags.map((tag) => (
          <span className="skill-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
});

export function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
