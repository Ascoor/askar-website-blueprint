
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
                                sans: ['Inter', 'Cairo Play', 'system-ui', '-apple-system', 'sans-serif'],
                                heading: ['Space Grotesk', 'Outfit', 'Cairo Play', 'sans-serif'],
                                mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'monospace'],
                                arabic: ['Cairo Play', 'sans-serif'],
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
                                foreground: '#0e1528',

                                // Ask-ar brand palette
                                primary: '#23d3fb',
                                accent: '#72d7ff',
                                moonWhite: '#e6ecfa',
                                surface: '#f7fafe',
                                card: '#f2f5fc',
                                muted: '#e6ebf5',
                                background: '#f8fbff',
                                midnight: '#0e1528',
                                darkSurface: '#23263a',
                                darkMuted: '#18233b',
                                darkCard: '#222b3d',
                                darkText: '#b8c3d6',
                                darkActive: '#eaf3ff',

                                // Lunar Night Brand System
                                primary: {
                                        DEFAULT: '#23d3fb',
                                        foreground: '#ffffff',
                                        hover: '#72d7ff',
                                        glow: '#72d7ff',
                                },
                                secondary: {
                                        DEFAULT: '#72d7ff',
                                        foreground: '#ffffff',
                                        hover: '#8ee4ff',
                                        glow: '#72d7ff',
                                },

				// Lunar Night Color Palette
                                // Semantic brand tokens
                                'brand-bg': 'hsl(var(--brand-bg))',
                                'brand-surface': 'hsl(var(--brand-surface))',
                                'brand-primary': 'hsl(var(--brand-primary))',
                                'brand-accent': 'hsl(var(--brand-accent))',
                                'brand-secondary': 'hsl(var(--brand-secondary))',
                                'brand-surface-dark': 'hsl(var(--brand-surface-dark))',
                                'brand-surface-light': 'hsl(var(--brand-surface-light))',
                                'brand-glow': 'hsl(var(--brand-glow))',
                                'text-base': 'hsl(var(--text-base))',
                                'text-muted': 'hsl(var(--text-muted))',

				// Glass effects
				'glass-bg': 'hsl(var(--glass-bg))',
        'glass-border': 'hsl(var(--glass-border))',

        // Navigation colors
        'nav-light': 'var(--nav-text-light)',
        'nav-light-active': 'var(--nav-active-light)',
        'nav-dark': 'var(--nav-text-dark)',
        'nav-dark-active': 'var(--nav-active-dark)',
        'hero-from': 'var(--hero-gradient-from)',
        'hero-to': 'var(--hero-gradient-to)',

				// Status colors
                                destructive: {
                                        DEFAULT: '#e5484d',
                                        foreground: '#ffffff',
                                        hover: '#dc2626',
                                },
                                success: {
                                        DEFAULT: '#22c55e',
                                        foreground: '#ffffff',
                                },
                                warning: {
                                        DEFAULT: '#facc15',
                                        foreground: '#1f2937',
                                },
                                info: {
                                        DEFAULT: '#38bdf8',
                                        foreground: '#ffffff',
                                },

				// UI elements
                                muted: {
                                        DEFAULT: '#e6ebf5',
                                        foreground: '#64748b'
                                },
                                accent: {
                                        DEFAULT: '#23d3fb',
                                        foreground: '#ffffff',
                                        hover: '#72d7ff',
                                },
                                popover: {
                                        DEFAULT: '#f7fafe',
                                        foreground: '#0e1528'
                                },
                                card: {
                                        DEFAULT: '#f2f5fc',
                                        foreground: '#0e1528'
                                },
                                sidebar: {
                                        DEFAULT: '#f8fbff',
                                        foreground: '#0e1528',
                                        primary: '#23d3fb',
                                        'primary-foreground': '#ffffff',
                                        accent: '#72d7ff',
                                        'accent-foreground': '#0e1528',
                                        border: '#e6ebf5',
                                        ring: '#23d3fb'
                                }
			},
			borderRadius: {
				'none': '0',
				'sm': '0.5rem',
				'md': '0.75rem',
				'lg': '1rem',
				'xl': '1rem',      // Lunar standard
				'2xl': '1.5rem',
				'3xl': '2rem',     // Modal radius
				'glass': '1rem',   // Glass cards
				'card': '1rem',
				'modal': '2rem',   // Large modals
				'button': '1rem',  // Button radius
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
				
				// Lunar Night Shadow System
				'lunar': '0 4px 20px -2px rgba(10, 26, 47, 0.15), 0 2px 8px -2px rgba(10, 26, 47, 0.1)',
				'lunar-lg': '0 8px 30px -4px rgba(10, 26, 47, 0.2), 0 4px 12px -4px rgba(10, 26, 47, 0.15)',
				'glow': '0 0 20px hsl(var(--brand-glow) / 0.3)',
				'glow-lg': '0 0 40px hsl(var(--brand-glow) / 0.4)',
				'glow-primary': '0 0 30px hsl(var(--brand-primary) / 0.2)',
				'glass': '0 8px 32px 0 rgba(30, 42, 59, 0.1)',
				'neon': '0 0 5px hsl(var(--brand-glow)), 0 0 20px hsl(var(--brand-glow)), 0 0 35px hsl(var(--brand-glow))',
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
