import clsx from "clsx";
import styles from "./styles.module.scss";

interface RedImageCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function RedImageCard({ ...props }: RedImageCardProps) {
  return (
    <div {...props} className={clsx(styles.redImageCard, props.className)} />
  );
}
