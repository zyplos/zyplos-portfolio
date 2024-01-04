import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import emblemImg from "@/assets/emblem.png";
import Link from "next/link";
import classNames from "classnames";

import homeStyles from "@/styles/Home.module.scss";
import textWallStyles from "@/components/TextWall/styles.module.scss";
import { RefinedPresenceData, UserStatusData } from "@/internals/getDiscordPresence";

const friendlyStatusText = {
  online: "⬤ Working",
  offline: "🞮 Offline",
  idle: "🞴 Chillin'",
  dnd: "🞓 Busy",
};

export default function Navbar({ homeMode = false }: { homeMode?: boolean }) {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isMobileNavExpanded, setIsMobileNavExpanded] = useState(false);
  const [expanded, setIsExpanded] = useState(!homeMode);
  const [cachedUserStatusData, setCachedUserStatusData] = useState<UserStatusData | null>(null);

  useEffect(() => {
    const statusLocalString = localStorage.getItem("status");
    setCachedUserStatusData(statusLocalString ? JSON.parse(statusLocalString) : null);
  }, []);

  useEffect(() => {
    const navThreshhold = parseInt(textWallStyles.textWallHeight) - parseInt(homeStyles.navHeight);
    const handleScroll = () => {
      if (window.scrollY > navThreshhold) {
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
        {cachedUserStatusData && cachedUserStatusData.status !== "offline" && (
          <div
            className={classNames(styles.links, "glass", homeStyles.statusChip, styles[cachedUserStatusData.status], {
              // glass: !expanded,
              [styles.statusChipExpanded]: expanded,
              [styles.statusChipMobile]: isMobileNavExpanded,
            })}
          >
            <span>{friendlyStatusText[cachedUserStatusData.status]}</span>
          </div>
        )}

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
