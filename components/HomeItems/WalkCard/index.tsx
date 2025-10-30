import clsx from "clsx";
import styles from "./styles.module.scss";

interface WalkCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function WalkCard({ ...props }: WalkCardProps) {
  return (
    <div {...props} className={clsx(styles.walkCard, props.className)}>
      <video
        loop
        autoPlay
        muted
        playsInline={true}
        src="/assets/walk.webm"
        className={styles.video}
      />
    </div>
  );
}
