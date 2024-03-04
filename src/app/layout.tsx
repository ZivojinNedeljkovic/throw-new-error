import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StoreProvider from '@/components/store-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.variable}>{children}</body>
      </html>
    </StoreProvider>
  )
}
