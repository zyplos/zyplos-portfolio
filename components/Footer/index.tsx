import styles from "./styles.module.scss";
import emblemRender from "@/assets/emblem-render.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BlueskyIcon, GitHubIcon, TwitterIcon } from "../Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.images}>
          <Link href="/">
            <Image
              src={emblemRender}
              alt=""
              quality={100}
              width={150}
              className={styles.emblem}
              id="footer-emblem"
            />
          </Link>
          <div className={styles.socials}>
            <a
              href="https://twitter.com/zyplos"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://github.com/zyplos"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://bsky.app/profile/zyplos.dev"
              target="_blank"
              rel="noreferrer"
            >
              <BlueskyIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
