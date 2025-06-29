import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mahbub E Waduzzaman - Full Stack Developer | Portfolio',
  description: 'Experienced full-stack developer specializing in React, Next.js, Node.js, and modern web technologies. View my portfolio and get in touch for your next project.',
  keywords: 'full stack developer, react developer, next.js, node.js, web development, portfolio',
  authors: [{ name: 'Mahbub E Waduzzaman' }],
  creator: 'Mahbub E Waduzzaman',
  openGraph: {
    title: 'Mahbub E Waduzzaman - Full Stack Developer',
    description: 'Experienced full-stack developer specializing in React, Next.js, Node.js, and modern web technologies.',
    url: 'https://Waduzzaman-portfolio.com',
    siteName: 'Mahbub E Waduzzaman Portfolio',
    images: [
      {
        url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
        width: 1200,
        height: 630,
        alt: 'Mahbub E Waduzzaman - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahbub E Waduzzaman - Full Stack Developer',
    description: 'Experienced full-stack developer specializing in React, Next.js, Node.js, and modern web technologies.',
    images: ['https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="canonical" href="https://Waduzzaman-portfolio.com" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}