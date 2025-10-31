import clsx from "clsx";
import styles from "./styles.module.scss";

interface HomeCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function HomeCard({
  className,
  children,
  ...props
}: HomeCardProps) {
  return (
    <div className={clsx(styles.card, className)} {...props}>
      {children}
    </div>
  );
}
