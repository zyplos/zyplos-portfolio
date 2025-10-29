import styles from "./styles.module.scss";

interface VSCodeCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function VSCodeCard({ ...props }: VSCodeCardProps) {
  return (
    <div {...props} className={`${styles.card} ${styles.vscodeCard} ${props.className || ''}`}>
      <h2 className={styles.cardTitle}>
        Working in <span className={styles.bold}>Visual Studio Code</span>
      </h2>
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
    </div>
  );
}