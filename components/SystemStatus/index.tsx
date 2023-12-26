import classNames from "classnames";
import styles from "./styles.module.scss";

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

export default function SystemStatus() {
  return (
    <div className={classNames(styles.grid, styles.statusText)}>
      {services.map((service, index) => (
        <div key={index}>
          {/* <p>{service.name}</p>
          <p className={styles.statusText}>{friendlyStatusText[service.status]}</p> */}
          <p>
            {service.name} <span className={styles[service.status]}>{friendlyStatusText[service.status]}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
