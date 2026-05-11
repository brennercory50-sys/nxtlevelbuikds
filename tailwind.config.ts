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
        cond: ['Barlow Condensed', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        accent: '#1a6eff',
        dark: '#16161a',
        green: '#00b87a',
      },
    },
  },
  plugins: [],
}
export default config
