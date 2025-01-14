import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import UpperGradient from "@/components/UpperGradient"

// const hubotSans = localFont({
//   src: `
//     url('./fonts/HubotSans.woff2') format('woff2'),
//     url('./fonts/HubotSans.woff') format('woff')
//   `,
//   variable: "--font-hubot-sans",
//   weight: "100 900", // Adjust the weight as needed
//   fallback: ['Arial', 'sans-serif']
// });
const hubotSans = localFont({
  src: "./fonts/Hubot-Sans.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Quanta",
  description: "Forecast with confidence, invest with clarity",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en" suppressHydrationWarning={true}>
        <body className={`${hubotSans.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <UpperGradient />
            {children}
          </ThemeProvider>
        </body>
      </html>
  )
}
