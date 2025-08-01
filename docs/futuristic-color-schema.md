# Futuristic Neon Color Schema

This palette defines the primary design tokens used across the application. The values are declared as CSS variables in `src/index.css` and mapped in `tailwind.config.ts`.

| Token              | HEX                   | Usage                    |
| ------------------ | --------------------- | ------------------------ |
| `primary`          | `#36f1fe`             | Main actions, buttons    |
| `secondary`        | `#0fd8c1`             | Accents and info         |
| `accent`           | `#9e5afc`             | Glows and highlights     |
| `background-dark`  | `#101829`             | Default dark background  |
| `background-light` | `#f5f8fc`             | Default light background |
| `surface`          | `rgba(20,30,50,0.72)` | Glass panels             |
| `text-dark`        | `#eaf6fa`             | Text in dark mode        |
| `text-light`       | `#101829`             | Text in light mode       |

Example usage:

```css
:root {
  --brand-primary: 184 98% 60%;
  --brand-secondary: 173 88% 45%;
  --brand-accent: 265 96% 67%;
  --brand-bg: 214 54% 97%;
}
```
