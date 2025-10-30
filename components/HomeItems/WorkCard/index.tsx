import clsx from "clsx";
import styles from "./styles.module.scss";

interface WorkCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function WorkCard({ ...props }: WorkCardProps) {
  return (
    <div
      {...props}
      className={clsx(styles.card, styles.workCard, props.className)}
    >
      <h2 className={styles.workTitle}>{"i'm looking for work!"}</h2>
      <p className={styles.bioText}>
        {
          "i'm a developer who's worked with the web and various other things for many years now"
        }
      </p>
      <p className={styles.bioText}>
        {
          "i like spending my time making stuff and i'm always happy to learn something new. come see some of my stuff on this site"
        }
      </p>
    </div>
  );
}
