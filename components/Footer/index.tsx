import styles from "./styles.module.scss";
import emblemRender from "@/assets/emblem-render.png";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BlueskyIcon, GitHubIcon, TwitterIcon } from "../Icons";
import Link from "next/link";

export default function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // Function to handle footer visibility change
  const handleFooterVisibilityChange = (isVisible: boolean) => {
    setIsFooterVisible(isVisible);
  };

  // Add event listener to detect footer visibility change
  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.querySelector("footer");
      if (footerElement) {
        const footerRect = footerElement.getBoundingClientRect();
        const isFooterVisible = footerRect.top < window.innerHeight;
        handleFooterVisibilityChange(isFooterVisible);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.images}>
          <Link href="/">
            <Image src={emblemRender} alt="" quality={100} width={150} className={styles.emblem} id="footer-emblem" />
          </Link>
          <div className={styles.socials}>
            <a href="https://twitter.com/zyplos" target="_blank">
              <TwitterIcon />
            </a>
            <a href="https://github.com/zyplos" target="_blank">
              <GitHubIcon />
            </a>
            <a href="https://bsky.app/profile/zyplos.dev" target="_blank">
              <BlueskyIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
