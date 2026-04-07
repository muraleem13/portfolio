export function scrollToSection(sectionId: string, offset = 70) {
  const section = document.getElementById(sectionId);
  if (!section) {
    return;
  }

  const top = section.offsetTop - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
