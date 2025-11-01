import clsx from "clsx";
import { HomeCard, SmallHeading } from "../HomeCard";
import styles from "./styles.module.scss";

interface DiscordStatusCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function DiscordStatusCard({
  className,
  ...props
}: DiscordStatusCardProps) {
  return (
    <HomeCard
      {...props}
      className={clsx(styles.cardWrapper, className)}
      padding="m"
    >
      <SmallHeading>Working in Visual Studio Code</SmallHeading>
      <div className={styles.vscodeContent}>
        <div className={styles.vscodeIconWrapper}>
          <div className={styles.vscodeIcon} />
          <div className={styles.vscodeStatusDot} />
        </div>
        <div className={styles.vscodeInfo}>
          <p className={styles.vscodeDetail}>Editing: index.tsx</p>
          <p className={styles.vscodeDetail}>Workspace: localhost</p>
        </div>
      </div>
    </HomeCard>
  );
}
