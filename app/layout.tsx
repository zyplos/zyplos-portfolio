import type { Metadata, Viewport } from 'next';
import '@/styles/_variables.css';
import '@/styles/globals.scss';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';

export const viewport: Viewport = {
  themeColor: '#111111',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://zyplos.dev'),
  title: {
    default: "zyplos's stuff",
    template: "%s • zyplos's stuff", // Changed template to use • for consistency
  },
  description: "a collection of things by zyplos, a developer and designer.",
  openGraph: {
    siteName: "zyplos's stuff",
  },
  // General icons can be defined here if not already in app/page.tsx for the homepage
  // For example, these were in app/page.tsx, if we want them global:
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/safari-pinned-tab.svg",
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        // color: '#ff3e3e', // color for mask-icon is part of the svg file or via manifest
      }
    ],
  },
   twitter: { // Default Twitter card settings
    card: "summary_large_image", // A common default
    // site: "@Zyplos", // Already in individual pages, but can be a fallback
    // creator: "@Zyplos", // Same as site
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
