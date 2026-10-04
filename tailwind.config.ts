import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        sans: ['var(--font-dm)', 'sans-serif'],
      },
      colors: {
        accent: '#1664ec',
        accent2: '#0047cc',
        dark: '#0d0f14',
        muted: '#5f6672',
        green: '#00c47a',
      },
    },
  },
  plugins: [],
}
export default config
