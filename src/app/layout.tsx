import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Neocarbon - Sustainable Technology Solutions',
  description: 'Revolutionizing how businesses approach environmental responsibility with innovative sustainability solutions.',
  keywords: 'sustainability, carbon footprint, green technology, environmental responsibility, business solutions',
  authors: [{ name: 'Neocarbon Team' }],
  openGraph: {
    title: 'Neocarbon - Sustainable Technology Solutions',
    description: 'Revolutionizing how businesses approach environmental responsibility with innovative sustainability solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neocarbon - Sustainable Technology Solutions',
    description: 'Revolutionizing how businesses approach environmental responsibility with innovative sustainability solutions.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
