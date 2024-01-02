import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import homeStyles from "@/styles/Home.module.scss";
import Image from "next/image";
import emblemImg from "@/assets/emblem.png";
import Link from "next/link";
import classNames from "classnames";

export default function Navbar({ expanded = true }: { expanded?: boolean }) {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isMobileNavExpanded, setIsMobileNavExpanded] = useState(false);

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
    <nav
      className={classNames(styles.nav, {
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
          style={{
            ...(isFooterVisible && { opacity: 0 }),
          }}
          className={classNames({
            [styles.lightEmblem]: isMobileNavExpanded,
          })}
        />
      </Link>
      <div
        className={classNames("glass", styles.hamburger)}
        onClick={() => {
          setIsMobileNavExpanded(!isMobileNavExpanded);
        }}
      >
        ☰
      </div>
      <div
        className={classNames(styles.linksSection, styles.mobileNav, {
          [styles.nogap]: expanded,
          [styles.mobileExpanded]: isMobileNavExpanded,
          [styles.opacity1]: isMobileNavExpanded,
        })}
      >
        <div
          className={classNames(styles.links, "glass", homeStyles.statusChip, {
            // glass: !expanded,
            [styles.online]: true,
            [styles.statusChipExpanded]: expanded,
          })}
        >
          <span>⬤ Working</span>
        </div>
        <div
          className={classNames(styles.links, {
            glass: !expanded,
          })}
        >
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/status">Status</Link>
        </div>
      </div>
    </nav>
  );
}
