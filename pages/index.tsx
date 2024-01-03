import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import TextWall from "@/components/TextWall";
import { useEffect, useState } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import textWallStyles from "@/components/TextWall/styles.module.scss";
import StatusText from "@/components/StatusText";
import Navbar from "@/components/Navbar";
import { DiscordREADMECard, GitHubProjectTracker, LoungeCard, MyImagesCard, SeeMoreProjectsCard, SystemStatusCard, TwitterCard } from "@/components/SpecialtyCard";
import classNames from "classnames";
import Link from "next/link";
import AnchorLink from "@/components/AnchorLink";
import Footer from "@/components/Footer";
import { DiscordStatusData } from "@/internals/getDiscordPresence";

export const getServerSideProps = (async ({ req, res }) => {
  res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");

  return {
    props: {
      message: "what",
    },
  };
}) satisfies GetServerSideProps<DiscordStatusData>;

export default function Home({ message }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // console.log red text
  console.log("%c%s", "color: #ff3e3e", "hey!!");

  return (
    <>
      <Head>
        <title>zyplos&apos;s stuff</title>
        <meta name="description" content="come take a look" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar homeMode={true} />

      <section className={styles["front-header"]}>
        <div>
          <TextWall />
        </div>
        <header>
          <div>
            <p>hey! i&apos;m</p>
            <h1>zyplos</h1>
          </div>
          <aside className={classNames("glass", styles.statusCard)}>
            {/* <StatusText /> */}
            {message}
          </aside>
        </header>
      </section>

      <main className={styles.main}>
        <div>
          <h2>stuff about me</h2>
          <p>i&apos;m a developer who&apos;s worked with the web and various other things for many years now</p>
          <p>i like learning new stuff and love building things</p>
        </div>

        <div>
          <h2>some stuff i&apos;ve made</h2>
          <p>these are some of my favorite things i&apos;ve made so far</p>
        </div>
        <div style={{ display: "flex", gap: "5rem", flexDirection: "column", marginTop: "2rem" }}>
          <a href="https://lounge.haus/" target="_blank">
            <LoungeCard />
          </a>
          <a href="https://github.com/Zyplos/discord-readme-badge" target="_blank">
            <DiscordREADMECard />
          </a>
          <a href="https://github.com/Zyplos/discord-readme-badge" target="_blank">
            <GitHubProjectTracker />
          </a>
          <Link href="/projects">
            <SeeMoreProjectsCard />
          </Link>
        </div>

        <div>
          <h2>design stuff</h2>
          <p>i do a bit of design whenever a project needs it</p>
          <p>sometimes i do 3D stuff</p>
          <p>you can find design stuff i make on twitter and on one of my other projects</p>
        </div>
        <div style={{ display: "flex", gap: "5rem", flexDirection: "column", marginTop: "2rem" }}>
          <a href="https://twitter.com/zyplos/media" target="_blank">
            <TwitterCard />
          </a>
          <a href="https://myimages.zip/" target="_blank">
            <MyImagesCard />
          </a>
        </div>

        <div>
          <h2>get in touch</h2>
          <p>
            you can reach out on{" "}
            <AnchorLink href="https://twitter.com/zyplos" target="_blank">
              twitter
            </AnchorLink>{" "}
            for quick stuff
          </p>
          <p>
            alternatively if it&apos;s something more formal you can email me at <span style={{ fontFamily: "monospace" }}>me@zyplos.dev</span>
          </p>
        </div>

        <div>
          <Link href="/status">
            <SystemStatusCard />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
