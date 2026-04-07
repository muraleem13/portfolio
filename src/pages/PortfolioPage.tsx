import { AboutSection } from "@/components/sections/AboutSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SectionSeparator } from "@/components/sections/SectionSeparator";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { useNotification } from "@/app/NotificationProvider";

export default function PortfolioPage() {
  const { notify } = useNotification();

  useRevealAnimation();

  const onResumeDownload = () => {
    notify("Resume download started! Check your downloads folder.", "success");
  };

  return (
    <>
      <HeroSection onResumeDownload={onResumeDownload} />
      <AboutSection onResumeDownload={onResumeDownload} />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <SectionSeparator />
      <ContactSection onNotification={notify} />
    </>
  );
}
