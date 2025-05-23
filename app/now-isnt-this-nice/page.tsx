import Fullscreen from "@/components/Fullscreen"; // Assuming Fullscreen is App Router compatible
import type { Metadata } from 'next';
import Image from 'next/image'; // Import next/image
import img from "@/assets/now-isnt-this-nice.jpg";

export const metadata: Metadata = {
  title: "Now isn't this nice?",
  // No other specific metadata from the original <Head>
  // Common viewport, icons, theme-color, etc., are handled by the root layout.
};

export default function NowIsntThisNicePage() { // Renamed for clarity
  return (
    <Fullscreen
      style={{
        backgroundColor: "#b6cde6",
        userSelect: "none",
        padding: "3rem",
        // Ensure Fullscreen can center the image or handle its layout
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Use next/image for optimized images */}
      <Image src={img} alt="Now isn't this nice?" priority />
    </Fullscreen>
  );
}
