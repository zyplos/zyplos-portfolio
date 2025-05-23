import type { Viewport } from 'next';
import '@/styles/_variables.css';
import '@/styles/globals.scss';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';

export const viewport: Viewport = {
  themeColor: '#111111',
  width: 'device-width',
  initialScale: 1,
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
