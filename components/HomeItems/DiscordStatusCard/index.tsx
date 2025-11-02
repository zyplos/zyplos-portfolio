"use server";
import Image from "next/image";
import clsx from "clsx";
import { HomeCard, SmallHeading } from "../HomeCard";
import getDiscordPresence from "@/internals/getDiscordPresence";
import styles from "./styles.module.scss";

const friendlyStatusTitle = {
  online: "⬤ Currently online",
  offline: "🞮 Currently offline",
  idle: "* Taking a break",
  dnd: "🞓 Busy working",
};

interface DiscordStatusCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default async function DiscordStatusCard({
  className,
  ...props
}: DiscordStatusCardProps) {
  const data = await getDiscordPresence();

  if (data.status === "offline") {
    return (
      <>
        <p className={clsx(styles.statusText, styles.offline)}>
          {friendlyStatusTitle.offline}
        </p>
        <span>not working online on anything at the moment</span>
      </>
    );
  }

  const presence = data.presence;

  const statusText = friendlyStatusTitle[data.status];

  return (
    <HomeCard
      {...props}
      className={clsx(styles.cardWrapper, className)}
      padding="m"
    >
      <SmallHeading className={clsx(styles.statusText, styles[data.status])}>
        {statusText}
      </SmallHeading>
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
    </HomeCard>
  );
}
