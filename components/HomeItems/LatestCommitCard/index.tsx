"use client";

import clsx from "clsx";
import { HomeCard, SmallHeading } from "../HomeCard";
import styles from "./styles.module.scss";
import Folder from "@/components/Icons/Folder";
import Branch from "@/components/Icons/Branch";

interface LatestCommitCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function LatestCommitCard({
  className,
  ...props
}: LatestCommitCardProps) {
  return (
    <HomeCard {...props} className={className} padding="m">
      <SmallHeading>Latest commit</SmallHeading>
      <div className={clsx(styles.flexRow, styles.infoRow)}>
        <div className={clsx(styles.flexRow, styles.infoCell)}>
          <Folder />
          <span>zyplos/quip</span>
        </div>
        <div className={clsx(styles.flexRow, styles.infoCell)}>
          <Branch />
          <span>main</span>
        </div>
      </div>
      <div className="textContent">
        <p className={styles.commitMessage}>new commit component ui done</p>
        <p className={styles.timestamp}>2m ago</p>
      </div>
    </HomeCard>
  );
}
