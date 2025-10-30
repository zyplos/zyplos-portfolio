import clsx from "clsx";
import styles from "./styles.module.scss";

interface LatestCommitCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function LatestCommitCard({ ...props }: LatestCommitCardProps) {
  return (
    <div
      {...props}
      className={clsx(styles.card, styles.commitCard, props.className)}
    >
      <h2 className={styles.cardTitle}>Latest commit</h2>
      <div className={styles.commitBranches}>
        <div className={styles.commitDot} />
        <span className={styles.commitBranch}>zyplos/quip</span>
        <div className={styles.commitDot} />
        <span className={styles.commitBranch}>main</span>
      </div>
      <p className={styles.commitMessage}>
        Tweet: component now takes class names...
      </p>
      <p className={styles.commitTime}>2m ago</p>
    </div>
  );
}
