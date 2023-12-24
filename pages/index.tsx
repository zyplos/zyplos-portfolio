import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import TextWall from "@/components/TextWall";
import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import textWallStyles from "@/components/TextWall/styles.module.scss";
import Image from "next/image";
import emblemImg from "@/assets/emblem.png";
import skyImg from "@/assets/mcsky.png";
import commandBlockImg from "@/assets/command-block.png";
import StatusText from "@/components/StatusText";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import { DiscordREADMECard, GitHubProjectTracker, LoungeCard } from "@/components/SpecialtyCard";
import classNames from "classnames";

export default function Home() {
  const { scrollYProgress, scrollY } = useScroll();
  const [navExpanded, setNavExpanded] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("scrollY changed to", latest);
    if (latest > parseInt(textWallStyles.textWallHeight) - parseInt(styles.navHeight)) {
      setNavExpanded(true);
    } else {
      setNavExpanded(false);
    }
  });

  return (
    <>
      <Head>
        <title>zyplos&apos;s stuff</title>
        <meta name="description" content="come take a look" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar expanded={navExpanded} />

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
            <StatusText />
            <div className={styles["crt-screen"]}></div>
            <div className={styles["crt-reflection"]}></div>
          </aside>
        </header>
      </section>

      <main className={styles.main}>
        <h2>stuff about me</h2>
        <p>i&apos;m a developer! i&apos;ve worked with the web and various other things for many years now </p>
        <p>i like building things!</p>
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
        </div>
      </main>
    </>
  );
}
