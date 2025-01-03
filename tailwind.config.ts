import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			boxShadow: {
				'category-tag-active': '0px 0px 0px 2px rgba(0, 0, 0, 0.25), 0px 0px 12px 0px rgba(138, 255, 71, 0.20), 0px 0px 5px 1px rgba(175, 255, 71, 0.50) inset'
			}
			, backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'category-gradient': 'linear-gradient(90deg, rgba(140, 227, 57, 0.40) -5.56%, rgba(140, 227, 57, 0.00) 100%), rgba(255, 255, 255, 0.20)',
				'category-tag-active': 'radial-gradient(50.83% 100% at 50% 0%, rgba(138, 255, 71, 0.50) 0%, rgba(59, 153, 43, 0.08) 100%)',
				'category-tag': 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.12) 100%)',
				'launch-app': 'linear-gradient(130deg, #8EC9FF 9%, #FF306E 56%, #F1D789 95%)',
				'btn-custom': 'linear-gradient(177deg, rgba(255, 48.37, 110.36, 0.08) 0%, rgba(250, 204, 105, 0.34) 100%)',
				'bg-custom': 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) -7.89%, rgba(255, 153, 0, 0.10) 109.21%)',
				'discover-card': 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%)',
				'get-started': 'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(180deg, rgba(9, 9, 11, 0) 0%, rgba(9, 9, 11, 0.03) 100%)',
				'explore': 'linear-gradient(180deg, #FFF5F5 0%, #FFF9F0 100%)',
				'launch-app-1': 'linear-gradient(92.72deg, #FF6A00 40.16%, #FFE600 104.68%)'
			},
			fontFamily: {
				chakra_petch: ['var(--chakra_petch)'],
				inter: ['var(--inter)']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
