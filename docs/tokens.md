# Design Tokens

This project centralizes all brand colors in CSS variables defined in `src/index.css` and exposed through Tailwind via `tailwind.config.ts`.

## Core Tokens

- `--brand-primary` / `--brand-secondary` – main accent colors
- `--brand-accent` – deep blue accent used for titles
- `--brand-bg` – page background
- `--brand-surface` – card backgrounds
- `--brand-glow` – base for glow shadows

## Navigation

- `--nav-text-light`, `--nav-active-light`
- `--nav-text-dark`, `--nav-active-dark`
- `--nav-light-glow`, `--nav-dark-glow`
- `--nav-shadow`, `--nav-shadow-soft`

## Hero

- `--hero-gradient-from`, `--hero-gradient-to`
- `--hero-gradient-dark-from`, `--hero-gradient-dark-to`

## Other

- `--accent-glow` – neon accent for highlights
- `--spinner-dark-[1-6]` – dark mode preloader rings

Use these variables with Tailwind's arbitrary values: `bg-[var(--hero-gradient-from)]`, `text-[var(--nav-text-dark)]`, or via the color names added in `tailwind.config.ts` (e.g. `text-nav-dark`).

### Guidelines

- Avoid hard-coded hex values in components. Reference tokens instead.
- When adding new UI colors, declare them in `src/index.css` and map them in `tailwind.config.ts`.
- Ensure sufficient contrast in both light and dark themes.
