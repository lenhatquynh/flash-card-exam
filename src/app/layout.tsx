import type { Metadata, Viewport } from 'next'
import './globals.css'
import { AppProviders } from '@/features/app/AppProviders'

export const metadata: Metadata = {
  title: 'flash-card-exam',
  description:
    'Practice for the AWS Certified Solutions Architect – Associate (SAA-C03) exam: study a bank of real questions one at a time, or sit a timed practice exam.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f5f7' },
    { media: '(prefers-color-scheme: dark)', color: '#0e1014' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
