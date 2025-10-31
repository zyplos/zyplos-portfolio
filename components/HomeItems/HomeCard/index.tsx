import clsx from "clsx";
import styles from "./styles.module.scss";

interface HomeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  noPadding?: boolean;
}

export default function HomeCard({
  className,
  children,
  noPadding,
  ...props
}: HomeCardProps) {
  return (
    <div
      className={clsx(styles.card, noPadding && styles.noPadding, className)}
      {...props}
    >
      {children}
    </div>
  );
}
