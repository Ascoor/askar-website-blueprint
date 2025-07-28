
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: 'clamp(1rem, 5vw, 3rem)',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'Tajawal', 'system-ui', '-apple-system', 'sans-serif'],
				heading: ['Outfit', 'Space Grotesk', 'Cairo Play', 'Tajawal', 'sans-serif'],
				mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'monospace'],
				arabic: ['Cairo Play', 'Tajawal', 'Amiri', 'sans-serif'],
			},
			fontSize: {
				'xs': ['clamp(0.75rem, 2vw, 0.875rem)', { lineHeight: '1.4' }],
				'sm': ['clamp(0.875rem, 2.5vw, 1rem)', { lineHeight: '1.5' }],
				'base': ['clamp(1rem, 3vw, 1.125rem)', { lineHeight: '1.6' }],
				'lg': ['clamp(1.125rem, 3.5vw, 1.25rem)', { lineHeight: '1.5' }],
				'xl': ['clamp(1.25rem, 4vw, 1.5rem)', { lineHeight: '1.4' }],
				'2xl': ['clamp(1.5rem, 5vw, 2rem)', { lineHeight: '1.3' }],
				'3xl': ['clamp(1.875rem, 6vw, 2.5rem)', { lineHeight: '1.2' }],
				'4xl': ['clamp(2.25rem, 7vw, 3rem)', { lineHeight: '1.1' }],
				'5xl': ['clamp(3rem, 8vw, 4rem)', { lineHeight: '1.1' }],
				'6xl': ['clamp(3.75rem, 10vw, 5rem)', { lineHeight: '1' }],
				'7xl': ['clamp(4.5rem, 12vw, 6rem)', { lineHeight: '1' }],
			},
			colors: {
				// Base semantic tokens
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',

				// Brand primary colors
				primary: {
					DEFAULT: 'hsl(var(--brand-primary))',
					foreground: 'hsl(var(--brand-primary-foreground))',
					hover: 'hsl(var(--brand-primary-hover))',
					glow: 'hsl(var(--brand-primary-glow))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--brand-secondary))',
					foreground: 'hsl(var(--brand-secondary-foreground))',
					hover: 'hsl(var(--brand-secondary-hover))',
					glow: 'hsl(var(--brand-secondary-glow))',
				},

				// Brand color palette
				'brand-primary': 'hsl(var(--brand-primary))',
				'brand-secondary': 'hsl(var(--brand-secondary))',
				'brand-amber': 'hsl(var(--brand-amber))',
				'brand-dark': 'hsl(var(--brand-dark))',
				'brand-light': 'hsl(var(--brand-light))',

				// Glass effects
				'glass-bg': 'hsl(var(--glass-bg))',
				'glass-border': 'hsl(var(--glass-border))',

				// Status colors
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
					hover: 'hsl(var(--destructive-hover))',
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))',
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))',
				},
				info: {
					DEFAULT: 'hsl(var(--info))',
					foreground: 'hsl(var(--info-foreground))',
				},

				// UI elements
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					hover: 'hsl(var(--accent-hover))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
                        borderRadius: {
                                'none': '0',
                                'sm': '0.5rem',
                                'md': '0.75rem',
                                'lg': '1rem',
                                'xl': '1.25rem',
                                '2xl': '1.5rem',
                                '3xl': '2rem',
                                'glass': '1.5rem',
                                'card': '0.75rem',
                                'modal': '1.25rem',
                                'pill': '2rem',
                                'button': '0.75rem',
                        },
                        spacing: {
                                'xs': '4px',
                                'sm': '8px',
                                'md': '12px',
                                'lg': '16px',
                                'xl': '24px',
                                '2xl': '32px',
                                '3xl': '48px',
                                '18': '4.5rem',
                                '88': '22rem',
                                '128': '32rem',
                                'section': 'clamp(4rem, 8vw, 8rem)',
                                'container': 'clamp(1rem, 5vw, 3rem)',
                        },
			boxShadow: {
				'none': 'none',
				'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
				'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
				'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
				'elegant': '0 4px 20px -2px rgba(0, 0, 0, 0.1), 0 2px 8px -2px rgba(0, 0, 0, 0.06)',
				'premium': '0 8px 30px -4px rgba(0, 0, 0, 0.15), 0 4px 12px -4px rgba(0, 0, 0, 0.1)',
				'glow': '0 0 20px hsl(var(--brand-secondary) / 0.3)',
				'glow-lg': '0 0 40px hsl(var(--brand-secondary) / 0.4)',
				'glow-primary': '0 0 30px hsl(var(--brand-primary) / 0.2)',
				'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
				'neon': '0 0 5px hsl(var(--brand-secondary)), 0 0 20px hsl(var(--brand-secondary)), 0 0 35px hsl(var(--brand-secondary))',
			},
			backdropBlur: {
				'glass': '16px',
				'glass-lg': '24px',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'glow': {
					'0%': {
						boxShadow: '0 0 20px hsl(var(--primary) / 0.3)'
					},
					'100%': {
						boxShadow: '0 0 30px hsl(var(--primary) / 0.6)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.05)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'scale-in': 'scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'slide-up': 'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'shimmer': 'shimmer 2s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: 'none',
						color: 'hsl(var(--foreground))',
						lineHeight: '1.7',
					},
				},
			},
		}
	},
       plugins: [tailwindcssAnimate, typography],
} satisfies Config;
