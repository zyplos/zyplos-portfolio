import type { Metadata, Viewport } from "next";
import "@/styles/_variables.css";
import "@/styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";

export const viewport: Viewport = {
  themeColor: "#0a0505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zyplos.dev"),
  title: "zyplos's stuff",
  description: "i like making stuff on my computer",
  openGraph: {
    siteName: "zyplos's stuff",
    title: "zyplos's stuff",
    type: "website",
    url: "https://zyplos.dev/",
    description: "i like making stuff on my computer",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/safari-pinned-tab.svg",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#ff3e3e",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@Zyplos",
    creator: "@Zyplos",
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
