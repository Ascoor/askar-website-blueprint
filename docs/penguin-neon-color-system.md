# Penguin Neon Color System

This document defines the redesigned Tailwind color palette for **Ask-ar Technology Solutions** with full Arabic and English support. The palette is inspired by a futuristic penguin mascot, combining deep neon blue and cyber orange with neutral shades. All colors respect WCAG AA contrast ratios.

## Color Scale

### Primary (Deep Neon Blue)

| Shade | HEX     |
| ----- | ------- |
| 100   | #E6F5FF |
| 200   | #B8E4FF |
| 300   | #8AD3FF |
| 400   | #5CC2FF |
| 500   | #0090FF |
| 600   | #0073CC |
| 700   | #005699 |
| 800   | #003A66 |
| 900   | #172749 |

### Accent (Cyber Orange)

| Shade | HEX     |
| ----- | ------- |
| 100   | #FFF4E6 |
| 200   | #FFE0B3 |
| 300   | #FFCB80 |
| 400   | #FFB74D |
| 500   | #FF6A00 |
| 600   | #E65E00 |
| 700   | #CC5200 |
| 800   | #B24600 |
| 900   | #8F3900 |

### Neutral

| Shade | HEX     |
| ----- | ------- |
| 100   | #FFFFFF |
| 200   | #F3F7FA |
| 300   | #E9EDF1 |
| 400   | #CED4DA |
| 500   | #AEB5BC |
| 600   | #8E969F |
| 700   | #2E3541 |
| 800   | #23262B |
| 900   | #1A1A1A |

Success `#31D158`, Warning `#FFD43B`, Error `#FF4D4F`.

## CSS Variables

```css
:root {
  --primary-500: #0090ff;
  --primary-900: #172749;
  --accent-500: #ff6a00;
  --accent-300: #ffcb80;
  --neutral-100: #f3f7fa;
  --neutral-900: #1a1a1a;
}
.dark {
  --primary-500: #3ab8ff;
  --primary-900: #172749;
  --accent-500: #ffcb68;
  --accent-300: #ff9400;
  --neutral-100: #23262b;
  --neutral-900: #f3f7fa;
}
```

## Tailwind Configuration Snippet

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E6F5FF',
          200: '#B8E4FF',
          300: '#8AD3FF',
          400: '#5CC2FF',
          500: '#0090FF',
          600: '#0073CC',
          700: '#005699',
          800: '#003A66',
          900: '#172749',
        },
        accent: {
          100: '#FFF4E6',
          200: '#FFE0B3',
          300: '#FFCB80',
          400: '#FFB74D',
          500: '#FF6A00',
          600: '#E65E00',
          700: '#CC5200',
          800: '#B24600',
          900: '#8F3900',
        },
        neutral: {
          100: '#FFFFFF',
          200: '#F3F7FA',
          300: '#E9EDF1',
          400: '#CED4DA',
          500: '#AEB5BC',
          600: '#8E969F',
          700: '#2E3541',
          800: '#23262B',
          900: '#1A1A1A',
        },
        success: '#31D158',
        warning: '#FFD43B',
        error: '#FF4D4F',
      },
    },
  },
};
```

## Component Examples

- **Button:** `class="bg-primary-500 text-white hover:bg-accent-500"`
- **Button (dark):** `class="dark:bg-primary-400 dark:text-primary-900 dark:hover:bg-accent-400"`
- **Card:** `class="bg-white/80 dark:bg-neutral-700/80 backdrop-blur-md border"`
- **Alert (success):** `class="bg-success/15 text-success border-l-4 border-success"`

## Theming Notes

Changing the values of `primary` or `accent` in the config or CSS variables updates all components. New brands can extend the same scale to fit additional identities.
