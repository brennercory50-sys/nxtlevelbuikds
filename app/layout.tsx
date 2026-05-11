import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { default: 'NXT Level Builds — Digital Agency | Daytona Beach FL', template: '%s | NXT Level Builds' },
  description: 'Web design, Google Ads, SEO & AI automation for Florida businesses. Based in Daytona Beach, serving clients statewide.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
