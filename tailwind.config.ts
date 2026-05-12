import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        accent: '#1a6eff',
        accent2: '#0047cc',
        dark: '#0d0f14',
        muted: '#6b7280',
        green: '#00c47a',
      },
    },
  },
  plugins: [],
}
export default config
