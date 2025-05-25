import type { Metadata } from "next";
import Image from "next/image";

import Fullscreen from "@/components/Fullscreen";

import img from "@/assets/now-isnt-this-nice.jpg";

export const metadata: Metadata = {
  title: "Now isn't this nice?",
};

export default function NowIsntThisNicePage() {
  return (
    <Fullscreen
      style={{
        backgroundColor: "#b6cde6",
        userSelect: "none",
        padding: "3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src={img}
        alt={
          'A picture of two bunnies on a blue background, with the caption "Now isn\'t this nice?"'
        }
        priority
      />
    </Fullscreen>
  );
}
