import Fullscreen from "@/components/Fullscreen";
import Head from "next/head";

export default function StatuePage() {
  return (
    <>
      <Head>
        <title>⬤</title>
      </Head>
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
    </>
  );
}
