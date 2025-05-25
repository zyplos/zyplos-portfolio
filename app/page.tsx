import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import styles from "@/styles/Home.module.scss";

import TextWall from "@/components/TextWall";
import Navbar from "@/components/Navbar";
import AnchorLink from "@/components/AnchorLink";
import Footer from "@/components/Footer";
import { DiscordStatusCard } from "@/components/DiscordStatusUI";
import {
  DiscordREADMECard,
  LoungeCard,
  MyImagesCard,
  SeeMoreProjectsCard,
  LatentWriterCard,
  TwitterCard,
} from "@/components/SpecialtyCard";

import portfolioImage from "@/assets/portfolio-header-mini.png";

export const revalidate = 15;

export default async function HomePage() {
  console.log(
    "%c%s",
    "color: #ffffff; font-family: monospace;",
    "--------------------"
  );
  console.log(
    "%c%s",
    "color: #ff3e3e; font-family: sans-serif;",
    "snooping as usual i see"
  );
  console.log(
    "%c%s",
    "color: #ffffff; font-family: sans-serif;",
    "i'm looking for a software engineer job. consider hiring me:"
  );
  console.log(
    "%c%s",
    "color: #ffd300; font-family: monospace;",
    "zyplos@duck.com"
  );
  console.log(
    "%c%s",
    "color: #ffffff; font-family: monospace;",
    "--------------------"
  );

  return (
    <>
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
            <DiscordStatusCard />
          </aside>
        </header>
      </section>

      <main className={styles.main}>
        <div
          style={{
            marginTop: 0,
          }}
        >
          <h2>stuff about me</h2>
          <p>
            i'm a developer who's worked with the web and various other things
            for many years now
          </p>
          <p>
            i like spending my time making stuff and i'm always happy to learn
            something new
          </p>
        </div>

        <div className={classNames(styles.aSide, styles.shimmeringCardBorder)}>
          <p>
            <b>I am looking for full time roles in</b> software engineering or
            design related roles. If you like my work and my experience aligns
            with a role you're looking to fill, feel free to reach out to me for
            a resume and a more formal portfolio. There's a contact section
            below.
          </p>
          <Image src={portfolioImage} alt="" quality={100} />
        </div>

        <div>
          <h2>some stuff i've made</h2>
          <p>
            here's some of my favorite projects you can look at and mess around
            with
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            flexDirection: "column",
            marginTop: "2rem",
          }}
        >
          <a href="https://lounge.haus/" target="_blank" rel="noreferrer">
            <LoungeCard />
          </a>
          <a
            href="https://github.com/Zyplos/discord-readme-badge"
            target="_blank"
            rel="noreferrer"
          >
            <DiscordREADMECard />
          </a>
          <a
            href="https://github.com/Zyplos/LatentWriter"
            target="_blank"
            rel="noreferrer"
          >
            <LatentWriterCard />
          </a>
          <Link href="/projects">
            <SeeMoreProjectsCard />
          </Link>
        </div>

        <div>
          <h2>design stuff</h2>
          <p>
            i like working with design! sometimes i'll do graphic design related
            stuff, ui stuff, whatever a project needs or would add on to make it
            look good
          </p>
          <p>sometimes i do 3D stuff in blender</p>
          <p>
            you can find the design stuff i make on twitter and on myimages.zip,
            one of the projects i made
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            flexDirection: "column",
            marginTop: "2rem",
          }}
        >
          <a
            href="https://twitter.com/zyplos/media"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterCard />
          </a>
          <a href="https://myimages.zip/" target="_blank" rel="noreferrer">
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
            or{" "}
            <AnchorLink
              href="https://bsky.app/profile/zyplos.dev"
              target="_blank"
            >
              bluesky
            </AnchorLink>{" "}
            for quick stuff. i also post updates, design stuff, in development
            stuff, and occasional photography on there if you&apos;re interested
            in keeping up with what i&apos;m doing
          </p>
          <p>
            alternatively if it&apos;s something more formal you can email me at{" "}
            <span style={{ fontFamily: "monospace" }}>zyplos@duck.com</span>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
