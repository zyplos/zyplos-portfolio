import styles from "./styles.module.scss";
import Image from "next/image";
import emblemImg from "@/assets/emblem.png";
import Link from "next/link";
import classnames from "classnames";

const TwitterIcon = () => (
  <svg version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" fill="currentColor">
    <path
      id="white_background"
      d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.58 31.77" fill="currentColor">
    <path d="M16.29,0C7.29,0,0,7.29,0,16.29c0,7.2,4.67,13.3,11.14,15.46,.81,.15,1.11-.35,1.11-.79,0-.39-.01-1.41-.02-2.77-4.53,.98-5.49-2.18-5.49-2.18-.74-1.88-1.81-2.38-1.81-2.38-1.48-1.01,.11-.99,.11-.99,1.63,.12,2.5,1.68,2.5,1.68,1.45,2.49,3.81,1.77,4.74,1.35,.15-1.05,.57-1.77,1.03-2.18-3.62-.41-7.42-1.81-7.42-8.05,0-1.78,.63-3.23,1.68-4.37-.17-.41-.73-2.07,.16-4.31,0,0,1.37-.44,4.48,1.67,1.3-.36,2.69-.54,4.08-.55,1.38,0,2.78,.19,4.08,.55,3.11-2.11,4.48-1.67,4.48-1.67,.89,2.24,.33,3.9,.16,4.31,1.04,1.14,1.67,2.59,1.67,4.37,0,6.26-3.81,7.63-7.44,8.04,.58,.5,1.11,1.5,1.11,3.02,0,2.18-.02,3.93-.02,4.47,0,.44,.29,.94,1.12,.78,6.47-2.16,11.13-8.26,11.13-15.45C32.58,7.29,25.29,0,16.29,0Z" />
  </svg>
);

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
          className={classnames(styles.links, {
            glass: !expanded,
          })}
        >
          <Link href="/">Home</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Updates</Link>
        </div>
        <div
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
        </div>
        <div
          className={classnames(styles.links, styles.systemStatus, {
            glass: !expanded,
            [styles.online]: true,
          })}
        >
          <span>⬤ Working</span>
        </div>
      </section>
    </nav>
  );
}
