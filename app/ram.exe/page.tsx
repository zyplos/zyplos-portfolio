import Image from "next/image";
import degImage from "@/assets/_deg.jpg";
import Fullscreen from "@/components/Fullscreen"; // Assuming Fullscreen is App Router compatible
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ram.exe",
  description: "download free RAM",
  openGraph: {
    title: "ram.exe",
    type: "website",
    url: "https://zyplos.dev/ram.exe/",
    description: "download free RAM",
  },
  twitter: {
    card: "summary",
    site: "@Zyplos",
    creator: "@Zyplos",
  },
  // Common viewport, icons, theme-color, etc., are handled by the root layout.
};

export default function RamEXEPage() {
  return (
    <Fullscreen
      style={{
        backgroundColor: "#f6c670",
        // Ensure the Fullscreen component centers its content or handles layout as needed
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src={degImage}
        alt="A humorous image related to 'downloading RAM', likely the _deg.jpg content." // Improved alt text
        style={{ maxWidth: "100%", height: "auto" }}
        priority // Good for LCP elements
      />
    </Fullscreen>
  );
}
