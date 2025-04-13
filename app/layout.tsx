import Head from "next/head";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/ui/footer-section";
import "./globals.css";
import JsonLd from '@/app/components/JsonLd'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

<Head>
  <link rel="icon" href="/icon.ico" sizes="any" />
  <link
    rel="apple-touch-icon"
    href="/apple-icon?<generated>"
    type="image/<generated>"
    sizes="<generated>"
  />
</Head>

export const metadata = {
  title: 'Techlance Hub | Professional IT & Digital Solutions',
  description: 'Techlance Hub provides custom website & app development, IT infrastructure, customer support, and digital marketing solutions to drive business growth.',
  keywords: 'IT services, web development, app development, digital marketing, customer support, logistics management',
  openGraph: {
    title: 'Techlance Hub | Professional IT & Digital Solutions',
    description: 'Custom technology solutions to drive your business growth',
    url: 'https://techlance.com',
    siteName: 'Techlance Hub',
    icons: {
      icon: 'favicon.ico',
      apple: 'apple-touch-icon.png',
    },
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Techlance Hub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Techlance Hub | Professional IT & Digital Solutions',
    description: 'Custom technology solutions to drive your business growth',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://techlance.com'),
  alternates: {
    canonical: '/',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      </head>
      <body className={`${inter.variable} antialiased w-full`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <MainNav />
          <main className="">{children}</main>
          <Footer />
          <JsonLd />
        </ThemeProvider>
      </body>
    </html>
  );
}
