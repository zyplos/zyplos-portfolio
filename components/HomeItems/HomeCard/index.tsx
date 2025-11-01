import clsx from "clsx";
import styles from "./styles.module.scss";

type Padding = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "none";

interface HomeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: Padding;
}

export function HomeCard({
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

interface SmallHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SmallHeading({ children }: SmallHeadingProps) {
  return <h2 className={styles.smallHeading}>{children}</h2>;
}
