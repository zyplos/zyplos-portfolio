import clsx from "clsx";
import styles from "./styles.module.scss";

interface ImageAreaCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ImageAreaCard({ ...props }: ImageAreaCardProps) {
  return (
    <div {...props} className={clsx(styles.imageAreaCard, props.className)}>
      <div className={styles.imageArea}>
        <span className={styles.imageAreaText}>image area</span>
      </div>
    </div>
  );
}
