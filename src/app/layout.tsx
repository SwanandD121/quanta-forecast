import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import UpperGradient from "@/components/UpperGradient";

const hubotSans = localFont({
  src: "./fonts/HubotSans-Regular.woff", // Adjust this path if needed
  variable: "--font-hubot-sans",
  weight: "100 900", // Adjust the weight as needed
  fallback: ['Arial', 'sans-serif']
});

export const metadata: Metadata = {
  title: "Quanta",
  description: "Forecast with confidence, invest with clarity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${hubotSans.variable} antialiased`}
      >
        <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              <UpperGradient/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
