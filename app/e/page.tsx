import Fullscreen from "@/components/Fullscreen"; // Assuming Fullscreen is App Router compatible
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "⬤",
  // No other specific metadata from the original <Head>
  // Common viewport, icons, theme-color, etc., are handled by the root layout.
};

export default function StatuePage() {
  return (
    <Fullscreen
      style={{
        backgroundColor: "#050505",
        color: "#5c5c5c",
        userSelect: "none",
        padding: "3rem",
      }}
    >
      <p style={{ fontSize: "10rem" }}>■ ⬤</p>
    </Fullscreen>
  );
}
