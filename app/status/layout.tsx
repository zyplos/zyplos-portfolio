import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "system status • zyplos's stuff",
  description: "check if anything's offline",
  openGraph: {
    title: "system status • zyplos's stuff",
    description: "check if anything's offline",
    url: "https://zyplos.dev/status",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@Zyplos",
    creator: "@Zyplos",
  },
  // Common viewport, icons, theme-color, etc., are handled by the root layout (app/layout.tsx)
};

interface StatusLayoutProps {
  children: React.ReactNode;
}

export default function StatusLayout({ children }: StatusLayoutProps) {
  return <>{children}</>; // This layout only adds metadata, doesn't render any extra structure
}
