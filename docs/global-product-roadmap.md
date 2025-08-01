# Global Product Roadmap for Askar Technology Solutions

This document outlines a phased plan to transform the project into a scalable international product. It summarizes quick wins, next steps, and required tasks.

## Quick Wins (1‑2 weeks)

- **Finalize Color System** using the neon palette defined in `penguin-neon-color-system.md`.
- **Implement Internationalization** with i18next. Keep translations under `src/locales` and load them lazily.
- **Add Security Headers** in `index.html` or server configuration (CSP, HSTS, X‑Frame‑Options).
- **Improve Loading Experience** by enabling code splitting (React.lazy + Suspense) and using the preloader documented in `custom-loaders.md`.

## Expansion Phase (1 month+)

- Build new sections such as **Blog**, **Careers**, **Partners**, and **Documentation**.
- Integrate a headless CMS (e.g. Strapi or Contentful) for easy content updates.
- Set up full CI/CD with automated tests and Lighthouse reports.
- Launch the site under a global domain with multi‑language SEO.

## Tasks Requiring a Specialized Team

- Advanced state management migration (Redux Toolkit or React Query).
- Secure server configuration and strict CSP policy.
- Setting up and maintaining the headless CMS.
- Comprehensive E2E testing (Playwright or Cypress).

## Tasks That Can Be Automated

- Code formatting with Prettier and Husky.
- Basic npm audit checks in CI.
- Generating translation files and sitemap during builds.

## Updated Sitemap

```
/
/services
/solutions
/projects
/about
/blog
/docs
/careers
/partners
/contact
```

## Starter Example: i18next Setup

```ts
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations } from '@/locales';

export const availableLocales = Object.keys(translations);

await i18next.use(initReactI18next).init({
  resources: translations,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});
```

This setup loads locale data from the existing files in `src/locales` and can be extended to fetch translations on demand.
