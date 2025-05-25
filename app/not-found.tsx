import Image from "next/image";
import Link from "next/link";
import Fullscreen from "@/components/Fullscreen";
import unitCubeImg from "@/assets/unitcube.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 not found • zyplos's stuff",
  description: "this page doesnt exist.",
};

export default function NotFound() {
  return (
    <Fullscreen>
      <h1>404</h1>
      <p>not found</p>
      <Link href="/" style={{ color: "#ff3e3e" }}>
        go to home page
      </Link>

      <Image
        src={unitCubeImg}
        quality={100}
        width={300}
        height={300}
        alt=""
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </Fullscreen>
  );
}
