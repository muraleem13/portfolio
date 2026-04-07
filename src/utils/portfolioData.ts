import type {
  CertificationItem,
  ContactItem,
  ExperienceItem,
  HighlightItem,
  NavItem,
  ProjectItem,
  SkillCategory,
  SocialLink
} from "@/types/portfolio";
import { CONTACT_EMAIL, CONTACT_LOCATION, CONTACT_PHONE } from "@/utils/env";

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" }
];

export const HIGHLIGHTS: HighlightItem[] = [
  { iconClass: "fas fa-trophy", text: "Outstanding Data Engineer Award" },
  { iconClass: "fas fa-certificate", text: "5+ Professional Certifications" },
  { iconClass: "fas fa-users", text: "Cross-functional Team Leadership" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    iconClass: "fas fa-database",
    title: "Big Data & Analytics",
    tags: [
      "PySpark",
      "Apache Spark",
      "Hadoop",
      "Hive",
      "Kafka",
      "ETL Pipelines",
      "Data Lake",
      "Databricks",
      "Data Warehouse",
      "Data Architectures"
    ]
  },
  {
    iconClass: "fas fa-cloud",
    title: "Cloud Platforms",
    tags: [
      "AWS Glue",
      "AWS S3",
      "AWS Lambda",
      "AWS Redshift",
      "AWS EMR",
      "AWS Athena",
      "Azure Data Factory",
      "Azure Synapse",
      "Microsoft Fabric",
      "Azure Functions"
    ]
  },
  {
    iconClass: "fas fa-code",
    title: "Programming & Development",
    tags: [
      "Python",
      "SQL",
      "Java",
      "Shell Scripting",
      "FastAPI",
      "Flask",
      "Spring Boot",
      "REST APIs",
      "Microservices"
    ]
  },
  {
    iconClass: "fas fa-server",
    title: "Databases & Storage",
    tags: ["Snowflake", "Redshift", "MongoDB", "PostgreSQL", "Oracle", "Iceberg", "ADLS"]
  },
  {
    iconClass: "fas fa-cogs",
    title: "DevOps & Tools",
    tags: ["GitLab", "Terraform", "AutoSys", "Jenkins", "Airflow", "TDD", "Unit Testing", "CI/CD"]
  },
  {
    iconClass: "fas fa-brain",
    title: "AI & Emerging Tech",
    tags: ["Generative AI", "Machine Learning", "Vertex AI", "Data Science", "RAG", "Fine-tuning"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    iconClass: "fas fa-building",
    title: "Enterprise Data Warehouse",
    description:
      "During my tenure at TCS, I worked on a centralized enterprise data warehouse solution for PNC Bank, consolidating financial and operational data across departments to support analytics, compliance, and reporting.",
    tech: ["Python", "PySpark", "Hadoop", "Hive", "Apache Spark", "Data warehousing", "SQL", "ETL/ELT"],
    links: [{ label: "Enterprise Project", href: "#", iconClass: "fas fa-lock", disabled: true }]
  },
  {
    iconClass: "fas fa-robot",
    title: "ChatGenesis",
    description:
      "AI-powered tool that generates technical documentation such as API specifications based on a user's business or startup idea. Integrates generative AI capabilities for enhanced automation and relevance.",
    tech: ["Python", "Generative AI", "APIs", "Documentation"],
    links: [
      {
        label: "View Code",
        href: "https://github.com/muraleem13/ChatGenesis",
        iconClass: "fab fa-github"
      }
    ]
  },
  {
    iconClass: "fas fa-user-tie",
    title: "Personal Portfolio",
    description:
      "Responsive static web application designed to highlight skills, experience, and personal projects. Built with modern web technologies and enhanced with animations.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    links: [
      {
        label: "View Code",
        href: "https://github.com/muraleem13/portfolio",
        iconClass: "fab fa-github"
      },
      {
        label: "Live Demo",
        href: "https://muraleem13.github.io/portfolio/",
        iconClass: "fas fa-external-link-alt"
      }
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    date: "Dec 2024 - Present",
    title: "Software Engineer",
    company: "EPAM Systems, Inc. (Client: Goldman Sachs Group, Inc.)",
    bullets: [
      "Engineered scalable data solutions delivering 40% performance improvement in Spark job execution",
      "Developed cloud-native architectures on AWS platform utilizing Glue, EMR, S3, Snowflake and Iceberg",
      "Collaborated with VPs, Product Managers, and Technical Leads to design data applications for Asset and Wealth Management",
      "Implemented enterprise data orchestration using AutoSys for critical ETL workflows",
      "Led troubleshooting initiatives for distributed pipeline failures with root cause analysis",
      "Contributed to software quality through TDD practices, code reviews, and automation testing frameworks",
      "Analyzed Java Spring Boot microservices and APIs, and engineered new features"
    ]
  },
  {
    date: "Apr 2021 - Dec 2024",
    title: "Data Software Engineer",
    company: "Tata Consultancy Services (Client: PNC Financial Services, Inc.)",
    bullets: [
      "Delivered end-to-end ETL solutions for enterprise Data Warehouse supporting banking operations",
      "Optimized data processing workflows using Hadoop, Spark, and Hive technologies",
      "Developed automation frameworks reducing QA efforts by 25% and improving data quality assurance",
      "Mentored junior engineers and participated in code reviews for team-wide best practices",
      "Created monitoring solutions using Unix shell scripts for job scheduling and system metrics"
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    iconClass: "fab fa-microsoft",
    title: "Azure Data Engineer Associate",
    description:
      "Microsoft Azure Data Engineering certification demonstrating expertise in designing and implementing data solutions using Azure services.",
    badge: "Microsoft Certified",
    link: "https://learn.microsoft.com/en-us/certifications/azure-data-engineer/"
  },
  {
    iconClass: "fas fa-database",
    title: "Databricks Data Engineer Associate",
    description:
      "Professional certification in Databricks platform for building and maintaining data pipelines and analytics solutions.",
    badge: "Databricks Certified",
    link: "https://www.databricks.com/learn/certification/data-engineer-associate"
  },
  {
    iconClass: "fas fa-warehouse",
    title: "Databricks Lakehouse Fundamentals",
    description:
      "Fundamental understanding of Databricks Lakehouse architecture and data management best practices.",
    badge: "Databricks Certified",
    link: "https://www.databricks.com/learn/certification/lakehouse-fundamentals"
  },
  {
    iconClass: "fas fa-brain",
    title: "Databricks Generative AI Fundamentals",
    description:
      "Comprehensive knowledge of generative AI technologies and their implementation using Databricks platform.",
    badge: "Databricks Certified",
    link: "https://www.databricks.com/learn/certification/generative-ai-fundamentals"
  },
  {
    iconClass: "fab fa-google",
    title: "Google Cloud: Prompt Design in Vertex AI",
    description:
      "Specialized certification in designing effective prompts for AI models using Google Cloud Vertex AI platform.",
    badge: "Google Cloud Certified",
    link: "https://cloud.google.com/learn/certification/prompt-design-vertex-ai"
  }
];

export const CONTACT_ITEMS: ContactItem[] = [
  { iconClass: "fas fa-envelope", label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { iconClass: "fas fa-phone", label: CONTACT_PHONE, href: `tel:${CONTACT_PHONE.replace(/\s+/g, "")}` },
  { iconClass: "fas fa-map-marker-alt", label: CONTACT_LOCATION }
];

export const HERO_SOCIAL_LINKS: SocialLink[] = [
  { iconClass: "fas fa-envelope", href: `mailto:${CONTACT_EMAIL}`, label: "Email" },
  {
    iconClass: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/in/murali-munireddy-b45b80177",
    label: "LinkedIn"
  },
  { iconClass: "fab fa-github", href: "https://github.com/muraleem13", label: "GitHub" }
];

export const FOOTER_SOCIAL_LINKS: SocialLink[] = HERO_SOCIAL_LINKS;
