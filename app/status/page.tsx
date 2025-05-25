import classNames from "classnames";
import type { Metadata } from "next";

import styles from "@/styles/SystemStatus.module.scss";
import Link from "next/link";

export const metadata: Metadata = {
  title: "system status • zyplos's stuff",
  description: "check if anything's offline",
  openGraph: {
    title: "system status • zyplos's stuff",
    description: "check if anything's offline",
    url: "https://zyplos.dev/status",
    type: "website",
  },
};

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
  return (
    <>
      <div className={styles.ccOverlay} />
      <main className={styles.main}>
        <section>
          <h1>system status</h1>
          <p>still working on this</p>
          <p>- me</p>

          <Link type="button" href="/" className={styles.homeLink}>
            &lt;- back
          </Link>
          <div className={styles.preview}>
            <p>&#47;&#47; preview</p>
            <div className={classNames(styles.grid)}>
              {services.map((service) => (
                <div className={styles.serviceRow} key={service.name}>
                  <span>{service.name}</span>
                  <span className={styles[service.status]}>
                    {friendlyStatusText[service.status]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
