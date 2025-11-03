import clsx from "clsx";
import { HomeCard } from "../HomeCard";
import styles from "./styles.module.scss";

interface ImageAreaCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ImageAreaCard({
  className,
  ...props
}: ImageAreaCardProps) {
  return (
    <HomeCard {...props} className={clsx(styles.imageAreaCard, className)}>
      <div className={styles.imageArea}>
        <span className={styles.imageAreaText}>image area</span>
      </div>
    </HomeCard>
  );
}
