import styles from "./styles.module.scss";
import homeStyles from "@/styles/Home.module.scss";
import Image from "next/image";
import emblemImg from "@/assets/emblem.png";
import Link from "next/link";
import classnames from "classnames";

export default function Navbar({ expanded }: { expanded: boolean }) {
  return (
    <nav className={`${styles.nav} ${expanded ? "glass" : ""}`} data-expanded={expanded}>
      <Image src={emblemImg} alt=">>>" priority className={classnames({})} />
      <section
        className={classnames({
          [styles.nogap]: expanded,
        })}
      >
        <div
          className={classnames(styles.links, "glass", homeStyles.statusChip, {
            // glass: !expanded,
            [styles.online]: true,
            [styles.statusChipExpanded]: expanded,
          })}
        >
          <span>⬤ Working</span>
        </div>
        <div
          className={classnames(styles.links, {
            glass: !expanded,
          })}
        >
          <Link href="/">Home</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Updates</Link>
        </div>
        {/* <div
          className={classnames(styles.links, {
            glass: !expanded,
          })}
        >
          <a href="https://twitter.com/zyplos" target="_blank">
            <TwitterIcon />
          </a>
          <a href="https://github.com/zyplos" target="_blank">
            <GitHubIcon />
          </a>
          <a href="https://bsky.app/profile/zyplos.dev" target="_blank">
            <BlueskyIcon />
          </a>
        </div> */}
      </section>
    </nav>
  );
}
