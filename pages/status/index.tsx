import styles from "@/styles/SystemStatus.module.scss";
import classNames from "classnames";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const friendlyStatusText = {
  online: "⬤ Online",
  offline: "🞮 Offline",
  degraded: "▼ Degraded performance",
  dev: "⬢ indev",
};

type Service = {
  name: string;
  status: keyof typeof friendlyStatusText;
};

const services: Service[] = [
  {
    name: "scooter-discord",
    status: "online",
  },
  {
    name: "buggy-discord",
    status: "online",
  },
  {
    name: "maestro-discord",
    status: "dev",
  },
  {
    name: "mb-year-tracker",
    status: "online",
  },
  {
    name: "minecraft-vanilla",
    status: "offline",
  },
  {
    name: "minecraft-modded",
    status: "online",
  },
  {
    name: "terraria-mp",
    status: "offline",
  },
  {
    name: "gmod-playground",
    status: "offline",
  },
  {
    name: "lounge-assets",
    status: "degraded",
  },
  {
    name: "gd-project-tracker",
    status: "dev",
  },
];

export default function SystemStatusPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>system status • zyplos&apos;s stuff</title>
        <meta name="description" content="check if anything's offline" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="system status • zyplos's stuff" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zyplos.dev/status" />
        <meta property="og:description" content="check if anything's offline" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Zyplos" />
        <meta name="twitter:creator" content="@Zyplos" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff3e3e" />
        <meta name="msapplication-TileColor" content="#ff3e3e" />
        <meta name="theme-color" content="#111111" />
      </Head>

      <div className={styles.ccOverlay}></div>
      <main className={styles.main}>
        <section>
          <h1>system status</h1>
          <p>still working on this</p>
          <p>- zy</p>

          <button type="button" onClick={() => router.back()} className={styles.homeLink}>
            &lt;- back
          </button>
          <div className={styles.preview}>
            <p>&#47;&#47; preview</p>
            <div className={classNames(styles.grid)}>
              {services.map((service, index) => (
                <div className={styles.serviceRow} key={index}>
                  <span>{service.name}</span>
                  <span className={styles[service.status]}>{friendlyStatusText[service.status]}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
