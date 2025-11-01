import clsx from "clsx";
import styles from "./styles.module.scss";

type Padding = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "none";

interface HomeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: Padding;
}

export default function HomeCard({
  className,
  children,
  padding = "l",
  ...props
}: HomeCardProps) {
  return (
    <div
      className={clsx(styles.card, styles[`padding-${padding}`], className)}
      {...props}
    >
      {children}
    </div>
  );
}
