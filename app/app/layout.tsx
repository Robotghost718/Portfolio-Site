import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Inter, Playfair_Display, Handjet, Pixelify_Sans, Press_Start_2P, Silkscreen, VT323 } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://dsweb.dev/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'dsweb.dev',
    template: '%s | dsweb.dev'
  },
  description:  'Daniel Stern - Web Developer, Salesforce Specialist',
  openGraph: {
    title: 'dsweb.dev',
    description: 'Daniel Stern - Web Developer, Salesforce Specialist',
    url: 'https://dsweb.dev/',
    siteName: 'dsweb.dev',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dsweb.dev',
    description: 'Daniel Stern - Web Developer, Salesforce Specialist',
  },
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const handjet = Handjet({
  variable: '--font-handjet',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const pixelifySans = Pixelify_Sans({
  variable: '--font-pixelify-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const pressStart2P = Press_Start_2P({
  variable: '--font-press-start-2p',
  subsets: ['latin'],
  weight: '400',
})

const silkscreen = Silkscreen({
  variable: '--font-silkscreen',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const vt323 = VT323({
  variable: '--font-vt323',
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} ${inter.variable} ${playfairDisplay.variable} ${handjet.variable} ${pixelifySans.variable} ${pressStart2P.variable} ${silkscreen.variable} ${vt323.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-lg flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
