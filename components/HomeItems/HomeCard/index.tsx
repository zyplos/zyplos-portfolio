import clsx from "clsx";
import styles from "./styles.module.scss";

type Sizes = "xxs" | "xs" | "s" | "default" | "m" | "l" | "xl" | "none";

export interface HomeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: Sizes;
  gap?: Sizes;
  center?: boolean;
}

export function HomeCard({
  className,
  children,
  padding = "l",
  gap = "none",
  center,
  ...props
}: HomeCardProps) {
  return (
    <div
      className={clsx(
        styles.card,
        styles[`padding-${padding}`],
        styles[`gap-${gap}`],
        center && styles.center,
        className,
      )}
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
