
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'RampAI - Learn Fast. Learn Deep. Deliver Smarter.',
  description: 'RampAI is where capability meets intelligence — transforming people and processes through expertly crafted AI training and consulting.',
  keywords: ['AI training', 'AI consulting', 'artificial intelligence', 'machine learning', 'deep learning', 'gen AI', 'agentic AI', 'workforce transformation', 'AI education'],
  authors: [{ name: 'RampAI Team' }],
  creator: 'RampAI',
  publisher: 'RampAI',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rampai.ai',
    title: 'RampAI - Learn Fast. Learn Deep. Deliver Smarter.',
    description: 'Transform your workforce with expert AI training and consulting services. Specializing in Gen AI, Machine Learning, Deep Learning, and Agentic AI solutions.',
    siteName: 'RampAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RampAI - Learn Fast. Learn Deep. Deliver Smarter.',
    description: 'Expert AI training and consulting services - Gen AI, ML, Deep Learning & Agentic AI',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#101585',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
