"use server";
import Image from "next/image";
import classNames from "classnames";

import styles from "./styles.module.scss";

import getDiscordPresence from "@/internals/getDiscordPresence";

const friendlyStatusText = {
  online: "⬤ Online",
  onlineWorking: "⬤ Working",
  offline: "🞮 Offline",
  idle: "* Chillin'",
  dnd: "🞓 Busy",
};

export async function DiscordStatusSpan() {
  const data = await getDiscordPresence();

  let statusText = friendlyStatusText[data.status];
  if (data.status === "online" && data.presence) {
    statusText = friendlyStatusText.onlineWorking;
  }

  return <span>{statusText}</span>;
}

const friendlyStatusTitle = {
  online: "⬤ Currently online",
  onlineWorking: "⬤ Currently working",
  offline: "🞮 Currently offline",
  idle: "* Taking a break",
  dnd: "🞓 Busy working",
};

export async function DiscordStatusCard() {
  const data = await getDiscordPresence();

  if (data.status === "offline") {
    return (
      <>
        <p className={classNames(styles.statusText, styles.offline)}>
          {friendlyStatusTitle.offline}
        </p>
        <span>not working online on anything at the moment</span>
      </>
    );
  }

  const presence = data.presence;

  let statusText = friendlyStatusTitle[data.status];
  if (data.status === "online" && presence) {
    statusText = friendlyStatusTitle.onlineWorking;
  }

  return (
    <div className={styles.wrapper}>
      <p className={classNames(styles.statusText, styles[data.status])}>
        {statusText}
      </p>
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
