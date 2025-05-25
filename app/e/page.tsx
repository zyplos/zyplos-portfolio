import type { Metadata } from "next";
import Fullscreen from "@/components/Fullscreen";

export const metadata: Metadata = {
  title: "⬤",
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
