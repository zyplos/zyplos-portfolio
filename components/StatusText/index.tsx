import styles from "./styles.module.scss";
import Image from "next/image";
import { UserStatusData } from "@/internals/getDiscordPresence";
import classNames from "classnames";

const friendlyStatusText = {
  online: "⬤ Currently online",
  onlineWorking: "⬤ Currently working",
  offline: "🞮 Currently offline",
  idle: "🞴 Taking a break",
  dnd: "🞓 Busy working",
};

export default function StatusText({ data }: { data: UserStatusData }) {
  if (data.status === "offline") {
    return (
      <>
        <p className={classNames(styles.statusText, styles.offline)}>🞮 Currently offline</p>
        <span>not working on anything right now. check back later !</span>
      </>
    );
  }

  const presence = data.presence;

  let statusText = friendlyStatusText[data.status];
  if (data.status === "online" && presence) {
    statusText = friendlyStatusText.onlineWorking;
  }

  return (
    <div className={styles.wrapper}>
      <p className={classNames(styles.statusText, styles[data.status])}>{statusText}</p>
      {presence && (
        <>
          <p className={styles.gameText}>Working in {presence.name}</p>
          <div className={styles.richPresence}>
            <div className={styles.images}>
              {presence.largeImageUrl && (
                <Image
                  src={presence.largeImageUrl}
                  alt={presence.largeImageAlt ?? ""}
                  title={presence.largeImageAlt ?? ""}
                  priority
                  width={128}
                  height={128}
                  className={styles.largeImage}
                />
              )}
              {presence.smallImageUrl && (
                <Image
                  src={presence.smallImageUrl}
                  alt={presence.smallImageAlt ?? ""}
                  title={presence.smallImageAlt ?? ""}
                  priority
                  width={128}
                  height={128}
                  className={styles.smallImage}
                />
              )}
            </div>
            <div>
              {presence.details && <p>{presence.details}</p>}
              {presence.state && <p>{presence.state}</p>}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
