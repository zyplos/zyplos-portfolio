"use client";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import styles from "./styles.module.scss";
import emblemImg from "@/assets/emblem.png";

import homeStyles from "@/styles/Home.module.scss";
import textWallStyles from "@/components/TextWall/styles.module.scss";
// import { DiscordStatusSpan } from "../DiscordStatusUI";

export default function Navbar({ homeMode = false }: { homeMode?: boolean }) {
  const [isMobileNavExpanded, setIsMobileNavExpanded] = useState(false);
  const [expanded, setIsExpanded] = useState(!homeMode);

  useEffect(() => {
    const navThreshold =
      Number.parseInt(textWallStyles.textWallHeight) -
      Number.parseInt(homeStyles.navHeight);
    const handleScroll = () => {
      if (window.scrollY > navThreshold) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };

    if (homeMode) {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [homeMode]);

  return (
    <nav
      className={clsx(styles.nav, {
        glass: expanded,
        [styles.navWrapperMobile]: isMobileNavExpanded,
      })}
      data-expanded={expanded}
    >
      <Link href="/" className={styles.emblemLink}>
        <Image
          src={emblemImg}
          alt=">>>"
          priority
          className={clsx({
            [styles.lightEmblem]: isMobileNavExpanded,
          })}
          style={{ display: "block" }}
        />
      </Link>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: not needed for mobile */}
      <div
        className={clsx("glass", styles.hamburger)}
        onClick={() => {
          setIsMobileNavExpanded(!isMobileNavExpanded);
        }}
      >
        ☰
      </div>
      <div
        className={clsx(styles.linksSection, styles.mobileNav, {
          [styles.nogap]: expanded,
          [styles.mobileExpanded]: isMobileNavExpanded,
          [styles.opacity1]: isMobileNavExpanded,
        })}
      >
        {/* app router stuff makes this annoying to implement, disabled now <Suspense>
          <div
            className={clsx(styles.links, "glass", styles.statusChip, {
              [styles.statusChipExpanded]: expanded,
              [styles.statusChipMobile]: isMobileNavExpanded,
            })}
          >
            <DiscordStatusSpan />
          </div>
        </Suspense> */}

        <div
          className={clsx(styles.links, styles.removeShadowMobile, {
            glass: !expanded,
          })}
        >
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/clipboard">Clipboard</Link>
        </div>
      </div>
    </nav>
  );
}
