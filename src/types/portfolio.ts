export type ThemeMode = "light" | "dark";

export type NotificationType = "info" | "success" | "error";

export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "certifications"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface HighlightItem {
  iconClass: string;
  text: string;
}

export interface SkillCategory {
  iconClass: string;
  title: string;
  tags: string[];
}

export interface ProjectItem {
  iconClass: string;
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
}

export interface ProjectLink {
  label: string;
  href: string;
  iconClass: string;
  disabled?: boolean;
}

export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  bullets: string[];
}

export interface CertificationItem {
  iconClass: string;
  title: string;
  description: string;
  badge: string;
  link: string;
}

export interface ContactItem {
  iconClass: string;
  label: string;
  href?: string;
}

export interface SocialLink {
  iconClass: string;
  href: string;
  label: string;
}
