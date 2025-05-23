import Image from "next/image";
import Link from "next/link";
import Fullscreen from "@/components/Fullscreen"; // Assuming Fullscreen is App Router compatible
import unitCubeImg from "@/assets/unitcube.png";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "404 Not Found • zyplos's stuff", // Updated title for clarity
  description: "The page you're looking for could not be found.", // Generic description
  // OpenGraph and Twitter metadata might not be as critical for a 404 page,
  // but can be included if desired, or let them be inherited/defaulted.
  // For example:
  // openGraph: {
  //   title: "404 Not Found",
  //   description: "Page not found.",
  // },
  // Rely on root layout for common icons, theme-color etc.
};

export default function NotFound() { // Renamed from Page404 for convention
  return (
    <Fullscreen>
      <h1>404</h1>
      <p>Not Found</p>
      <Link href="/" style={{ color: "#ff3e3e" }}>
        Go to Home Page
      </Link>
      <Image
        src={unitCubeImg}
        quality={100}
        width={300} // It's good practice to provide width and height for non-SVG local images
        height={300} // Assuming it's a square, adjust if not
        alt="A spinning unit cube" // Added more descriptive alt text
        style={{ maxWidth: "100%", height: "auto", marginTop: "2rem" }} // Added some margin for spacing
      />
    </Fullscreen>
  );
}
