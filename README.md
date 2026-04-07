# Murali Munireddy Portfolio (React + TypeScript + Vite)

Production-grade portfolio application migrated from static HTML/CSS/JS into a scalable React architecture.

## Tech Stack

- React 18 (functional components + hooks)
- TypeScript
- Vite
- React Router
- CSS (modularized into React app style layers)

## Architecture

```text
.
|-- index.html
|-- package.json
|-- vite.config.ts
|-- tsconfig.json
|-- tsconfig.app.json
|-- tsconfig.node.json
|-- public/
|   |-- manifest.json
|   |-- robots.txt
|   |-- sw.js
|   `-- assets/
|       |-- images/profile-photo.jpg
|       `-- resume/Resume_Murali_Munireddy.pdf
`-- src/
    |-- main.tsx
    |-- App.tsx
    |-- routes.tsx
    |-- app/
    |   |-- ThemeProvider.tsx
    |   `-- NotificationProvider.tsx
    |-- pages/
    |   `-- PortfolioPage.tsx
    |-- components/
    |   |-- layout/
    |   |   |-- Navbar.tsx
    |   |   |-- Footer.tsx
    |   |   |-- BackToTopButton.tsx
    |   |   `-- Layout.tsx
    |   |-- sections/
    |   |   |-- HeroSection.tsx
    |   |   |-- AboutSection.tsx
    |   |   |-- SkillsSection.tsx
    |   |   |-- ProjectsSection.tsx
    |   |   |-- ExperienceSection.tsx
    |   |   |-- CertificationsSection.tsx
    |   |   |-- ContactSection.tsx
    |   |   `-- SectionSeparator.tsx
    |   `-- ui/
    |       `-- NotificationToast.tsx
    |-- hooks/
    |   |-- useScrollSpy.ts
    |   `-- useRevealAnimation.ts
    |-- utils/
    |   |-- env.ts
    |   |-- portfolioData.ts
    |   |-- scroll.ts
    |   `-- serviceWorker.ts
    |-- types/
    |   `-- portfolio.ts
    `-- styles/
        |-- loading.module.css
        |-- portfolio.css
        `-- react-app.css
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Production build:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Environment Variables

Create `.env` from `.env.example`:

```bash
VITE_CONTACT_EMAIL=muralee.m13@gmail.com
VITE_CONTACT_PHONE=+917708229018
VITE_CONTACT_LOCATION=Whitefield, Bangalore - 560066
```
