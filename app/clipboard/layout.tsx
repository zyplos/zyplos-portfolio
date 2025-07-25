// This layout only adds metadata, doesn't render any extra structure
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "clipboard • zyplos's stuff",
  description: "snippets i need from time to time",
  openGraph: {
    title: "clipboard • zyplos's stuff",
    description: "snippets i need from time to time",
    url: "https://zyplos.dev/clipboard",
    type: "website",
  },
};

interface ClipboardLayoutProps {
  children: React.ReactNode;
}

export default function ClipboardLayout({ children }: ClipboardLayoutProps) {
  return <>{children}</>;
}
