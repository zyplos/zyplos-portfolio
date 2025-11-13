import Image from "next/image";
import styles from "./styles.module.scss";
import {
  ArrowLeft,
  ArrowRight,
  Close,
  Info,
  More,
  NewTab,
  Refresh,
  Star,
  TabIcon,
  Subscriptions,
  GoogleNews,
} from "./icons";
import Twitter from "@/components/Logos/Twitter";

export default function ChromeUI() {
  return (
    <div className={styles.chrome}>
      <div className={styles.header}>
        <div className={styles.tabs}>
          <div className={styles.tab}>
            <TabIcon />
            <span>zyplos's stuff</span>
            <Close />
          </div>
          <div className={styles.tabActive}>
            <TabIcon />
            <span>projects • zyplos's stuff</span>
            <Close />
          </div>
          <div className={styles.newTab}>
            <NewTab />
          </div>
        </div>
        <div className={styles.windowControls}>
          <div className={styles.control}>—</div>
          <div className={styles.control}>❐</div>
          <div className={styles.control}>✕</div>
        </div>
      </div>
      <div className={styles.toolbar}>
        <div className={styles.navButtons}>
          <ArrowLeft />
          <ArrowRight />
          <Refresh />
        </div>
        <div className={styles.addressBar}>
          <Info />
          <span>http://localhost:3000/new</span>
        </div>
        <div className={styles.profileArea}>
          <Star />
          <Image
            src="/assets/me.png"
            alt="profile"
            width={24}
            height={24}
            className={styles.profilePic}
          />
          <More />
        </div>
      </div>
      <div className={styles.bookmarksBar}>
        <div className={styles.bookmark}>
          <Subscriptions />
          <span>Subscriptions</span>
        </div>
        <div className={styles.bookmark}>
          <Twitter />
          <span>Twitter</span>
        </div>
        <div className={styles.bookmark}>
          <GoogleNews />
          <span>Google News</span>
        </div>
      </div>
    </div>
  );
}
