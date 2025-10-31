import clsx from "clsx";
import styles from "./styles.module.scss";
import HomeCard from "../HomeCard";

interface WalkCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function WalkCard({ className, ...props }: WalkCardProps) {
  return (
    <HomeCard {...props} className={clsx(styles.walkCard, className)} noPadding>
      <video
        loop
        autoPlay
        muted
        playsInline={true}
        src="/assets/walk.webm"
        className={styles.video}
      />
    </HomeCard>
  );
}
