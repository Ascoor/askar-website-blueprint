# Lunar Night Design System

This guide defines the "Lunar Night" visual identity for **Askar Software Solutions**. It focuses on a calm moonlit aesthetic with cold harmony.

## Color Tokens

| Token | HEX |
|-------|-----|
| `brand-primary` | `#0A1A2F` |
| `brand-secondary` | `#36B3F5` |
| `brand-surface-dark` | `#0B0E14` |
| `brand-surface-light` | `#1E2A3B` |
| `brand-glow` | `#5DCBFF` |
| `text-base` | `#D6E9FF` |
| `text-muted` | `#A2B3C2` |

## Typography

- Headings use **Space Grotesk** with sizes defined via `clamp()`.
- Body copy scales with `clamp(1rem, 2vw, 1.5rem)`.
- All fonts have smoothing enabled and glow on hover.

## UI Elements

- Buttons are `rounded-xl` and display a neon ring on hover.
- Cards use glassmorphism with `bg-brand-surface-light` and `backdrop-blur-sm`.
- The navbar floats above content and darkens on scroll.
- Form inputs highlight with a soft glow when focused.

## Motion & Effects

Subtle fade and translate animations reveal content as it scrolls into view. Radial highlights and a faint noise texture add depth without distracting from the content.

A futuristic penguin mascot with a gentle blue glow can be shown in hero sections or loaders.

Designed primarily for dark mode, the palette avoids any warm hues to maintain a serene lunar feeling.