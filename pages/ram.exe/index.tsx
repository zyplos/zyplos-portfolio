import Image from "next/image";
import degImage from "@/assets/_deg.jpg";
import Head from "next/head";

export default function RamEXEPage() {
  return (
    <>
      <Head>
        <title>ram.exe</title>
        <meta name="description" content="download free RAM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="ram.exe" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zyplos.dev/ram.exe/" />
        <meta property="og:description" content="download free RAM" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Zyplos" />
        <meta name="twitter:creator" content="@Zyplos" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff3e3e" />
        <meta name="msapplication-TileColor" content="#ff3e3e" />
        <meta name="theme-color" content="#111111" />
      </Head>

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f6c670",
        }}
      >
        <Image src={degImage} alt="_deg.jpg" style={{ maxWidth: "100%", height: "auto" }} />
      </div>
    </>
  );
}
