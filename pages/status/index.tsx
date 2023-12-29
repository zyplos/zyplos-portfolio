import styles from "@/styles/SystemStatus.module.scss";
import Link from "next/link";

const friendlyStatusText = {
  online: "⬤ Online",
  offline: "🞮 Offline",
  degraded: "▼ Check",
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
      <main className={styles.main}>
        <section>
          <h1>system status</h1>
          {/* <div className={styles.grid}>
            {services.map((service, index) => (
              <div key={index}>
                <p>
                  {service.name} <span className={styles[service.status]}>{friendlyStatusText[service.status]}</span>
                </p>
              </div>
            ))}
          </div> */}
          <p>indev</p>
        </section>

        <Link href="/" className={styles.homeLink}>
          &lt;- home
        </Link>
      </main>
    </>
  );
}
