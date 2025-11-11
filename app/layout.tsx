import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Outfit, Nunito_Sans } from "next/font/google";
import clsx from "clsx";

import "@/styles/_variables.css";
import "@/styles/_globals.scss";

const outfit = Outfit({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const nunitoSans = Nunito_Sans({
  weight: ["400", "800"],
  subsets: ["latin"],
  display: "swap",
});

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
    site: "@zyplos",
    creator: "@zyplos",
  },
};

/*
cabin
nunitoSans [winner]
geist

NOPE:
Outfit
Cabin
Noto_Sans
Sen
Nunito_Sans
Rubik
Jost
Inter
Inter_Tight
Urbanist
Sora
Almarai
Instrument_Sans
Zalando_Sans
Didact_Gothic
Geist
Rethink_Sans
*/

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={clsx(outfit.variable, nunitoSans.className)}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
