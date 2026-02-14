import React from "react"
import type { Metadata } from "next"
import { Montserrat, JetBrains_Mono } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

import "./globals.css"

const _montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})
const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: {
    default: "GEOFINDA Tech Hub",
    template: "%s | GEOFINDA Tech Hub",
  },
  description:
    "We build, advise, support, and extend technology capabilities. Whatever your situation, we can help you move forward with clarity and confidence.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_montserrat.variable} ${_jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
