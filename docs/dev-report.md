# Development Status and Roadmap (August 2025)

This document summarizes the current codebase status and lists the remaining tasks in a prioritized roadmap. References are provided for context.

## Current Status

- Unused loaders and the legacy ErrorBoundary were archived.
- `ts-prune` added to detect unused exports.
- Code builds and lints successfully.
- Documentation contains action plans and a global roadmap.

## Roadmap

| Task                                       | Priority          | Impact / Notes                                                                                                 | References                                                                                                                                 |
| ------------------------------------------ | ----------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Accessibility audit and fixes**          | High              | Add missing ARIA attributes, ensure alt text and keyboard support, check color contrast.                       | [action-plan.md §5-12](action-plan.md#L5-L12)                                                                                              |
| **Enable security headers**                | High              | Add CSP, HSTS, X-Frame-Options, etc. Remove console logs, run `npm audit`.                                     | [action-plan.md §14-22](action-plan.md#L14-L22)                                                                                            |
| **Code splitting**                         | High              | Use `React.lazy`/`Suspense`, lazy-load translations, configure Vite chunks.                                    | [action-plan.md §22-28](action-plan.md#L22-L28)                                                                                            |
| **Automated tests & CI**                   | High              | Vitest + React Testing Library, GitHub Actions, optional Lighthouse check.                                     | [action-plan.md §30-37](action-plan.md#L30-L37)                                                                                            |
| **i18next migration**                      | High              | Replace static translation objects with i18next, load locales lazily.                                          | [global-product-roadmap.md §6-10](global-product-roadmap.md#L5-L10), [global-product-roadmap.md §47-63](global-product-roadmap.md#L47-L63) |
| **Documentation updates**                  | Medium            | Expand English docs, document components and RTL setup, clarify contribution process.                          | [action-plan.md §40-45](action-plan.md#L40-L45)                                                                                            |
| **Integrate Prettier & Husky**             | Medium            | Ensure consistent code formatting and pre-commit checks.                                                       | [global-product-roadmap.md §28](global-product-roadmap.md#L28), [action-plan.md §78](action-plan.md#L78)                                   |
| **UX refinements**                         | Medium            | Review animations, smooth hero slider with swipe support, show simple loader when switching language or theme. | [action-plan.md §47-52](action-plan.md#L47-L52)                                                                                            |
| **Content expansion with CMS**             | Medium            | Build Blog, Careers, Partners sections; integrate headless CMS (e.g. Strapi).                                  | [global-product-roadmap.md §12-16](global-product-roadmap.md#L12-L16)                                                                      |
| **Performance monitoring**                 | Medium            | Run Lighthouse in CI, monitor bundles.                                                                         | [action-plan.md §35](action-plan.md#L35)                                                                                                   |
| **Advanced state management & strict CSP** | Low / Specialized | Consider Redux Toolkit or React Query; enforce stricter server-side CSP.                                       | [global-product-roadmap.md §19-24](global-product-roadmap.md#L19-L24)                                                                      |
| **Comprehensive E2E testing**              | Low / Specialized | Use Playwright or Cypress once core features stabilize.                                                        | [global-product-roadmap.md §19-24](global-product-roadmap.md#L19-L24)                                                                      |

## Notes

- The current code base contains no `console.log` statements.
- Security meta tags exist in `index.html`, but a full Content Security Policy is still missing.
- Automated tests are not yet implemented; `npm test` reports no files.
