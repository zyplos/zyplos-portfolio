import clsx from "clsx";
import { HomeCard, SmallHeading } from "../HomeCard";
import styles from "./styles.module.scss";
import Folder from "@/components/Icons/Folder";
import Branch from "@/components/Icons/Branch";
import getGitHubActivity from "@/internals/getGitHubActivity";
import AnchorLink from "@/components/AnchorLink";
import RelativeTime from "@/components/RelativeTime";
import BlurIntoExistence from "@/components/BlurIntoExistence";
import { Suspense } from "react";

interface LatestCommitCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default async function LatestCommitCard({
  className,
  ...props
}: LatestCommitCardProps) {
  const data = await getGitHubActivity();

  if ("code" in data) {
    return (
      <HomeCard {...props} className={className} padding="m">
        <SmallHeading>Latest commit</SmallHeading>
        <div className="textContent">
          <p className={styles.commitMessage}>Could not load commit data.</p>
          <p className={styles.timestamp}>{data.message}</p>
        </div>
      </HomeCard>
    );
  }

  return (
    <HomeCard
      {...props}
      className={clsx(styles.cardWrapper, className)}
      padding="m"
    >
      <SmallHeading>Latest commit</SmallHeading>
      <div className={clsx(styles.flexRow, styles.infoRow)}>
        <div className={clsx(styles.flexRow, styles.infoCell)}>
          <Folder />
          <span>{data.repo}</span>
        </div>
        <div className={clsx(styles.flexRow, styles.infoCell)}>
          <Branch />
          <span>{data.branch}</span>
        </div>
      </div>
      <div className={styles.commitMessageWrapper}>
        <div className={clsx("textContent", styles.commitMessage)}>
          <AnchorLink href={data.url} target="_blank">
            <p>{data.message}</p>
          </AnchorLink>
        </div>
        <Suspense>
          <RelativeTime
            timestamp={data.timestamp}
            className={styles.timestamp}
          />
        </Suspense>
      </div>
    </HomeCard>
  );
}
