# Askar Software Solutions Design System

This style guide defines the core tokens and UI guidelines for building interfaces using **Tailwind CSS**. It supports both English (LTR) and Arabic (RTL) layouts and includes light and dark themes.

## Brand Colors

| Token             | HEX                      | Usage                    |
| ----------------- | ------------------------ | ------------------------ |
| `brand-primary`   | `#002F5D`                | Headers, primary actions |
| `brand-secondary` | `#36B3F5`                | Links, highlights        |
| `brand-amber`     | `#FF9800`                | Accent light             |
| `brand-dark`      | `#0B0E14`                | Dark surfaces            |
| `brand-light`     | `#ECF0F3`                | Light surfaces           |
| `glass-bg`        | `rgba(255,255,255,0.05)` | Glassmorphic backgrounds |

## Typography

- **Headings** use `Outfit` or `Space Grotesk`.
- **Body text** uses `Inter`; Arabic text uses `Cairo Play` or `Tajawal`.
- Font weights: 400, 600, 800.
- Letter spacing on headings is `-0.5px`.
- Line heights: `1.1` for headings and `1.6` for body text.

## Spacing Scale

Semantic spacing utilities are provided for consistent padding and margin:

| Token | Value  |
| ----- | ------ |
| `xs`  | `4px`  |
| `sm`  | `8px`  |
| `md`  | `12px` |
| `lg`  | `16px` |
| `xl`  | `24px` |
| `2xl` | `32px` |
| `3xl` | `48px` |

## Radius Tokens

Rounded corners are defined for common components:

| Token   | Value  |
| ------- | ------ |
| `card`  | `12px` |
| `modal` | `20px` |
| `pill`  | `32px` |

## Shadows and Effects

- `glow` and `neon` shadows create soft light around elements.
- `backdrop-blur-md` is used for glassmorphic surfaces.
- Transitions use gentle fade and slide animations.

## Layout

- Containers are centered with responsive padding using `clamp(1rem, 5vw, 3rem)`.
- Sections use `pt-[80px] pb-[80px]` to maintain rhythm while scrolling.
- Max widths: `xl:max-w-[1200px]` and `md:max-w-[960px]`.

## Identity Traits

The interface combines dark, glassy surfaces with neon blue highlights and subtle glow animations. A penguin mascot can appear in the header or loading states. The overall tone is futuristic and professional.
