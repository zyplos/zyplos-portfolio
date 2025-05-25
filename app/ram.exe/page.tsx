import Image from "next/image";
import degImage from "@/assets/_deg.jpg";
import Fullscreen from "@/components/Fullscreen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ram.exe",
  description: "download free RAM",
  openGraph: {
    title: "ram.exe",
    type: "website",
    url: "https://zyplos.dev/ram.exe",
    description: "download free RAM",
  },
};

export default function RamEXEPage() {
  return (
    <Fullscreen
      style={{
        backgroundColor: "#f6c670",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src={degImage}
        alt="image of a funny dog that gives you free RAM"
        style={{ maxWidth: "100%", height: "auto" }}
        priority
      />
    </Fullscreen>
  );
}
