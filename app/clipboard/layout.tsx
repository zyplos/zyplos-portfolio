import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "clipboard • zyplos's stuff",
  description: "snippets i need from time to time",
  openGraph: {
    title: "clipboard • zyplos's stuff",
    description: "snippets i need from time to time",
    url: "https://zyplos.dev/clipboard",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@Zyplos",
    creator: "@Zyplos",
  },
  // Common viewport, icons, theme-color, etc., are handled by the root layout (app/layout.tsx)
};

interface ClipboardLayoutProps {
  children: React.ReactNode;
}

export default function ClipboardLayout({ children }: ClipboardLayoutProps) {
  return <>{children}</>; // This layout only adds metadata, doesn't render any extra structure
}
