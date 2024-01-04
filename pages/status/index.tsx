import styles from "@/styles/SystemStatus.module.scss";
import classNames from "classnames";
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
