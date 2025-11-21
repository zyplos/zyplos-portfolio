import clsx from "clsx";
import { HomeCard, type HomeCardProps } from "../HomeCard";
import styles from "./styles.module.scss";

interface FluidImageCardProps extends HomeCardProps {}

/**
 * this card should only take an Image child
 */
export default function FluidImageCard({
  className,
  children,
  ...props
}: FluidImageCardProps) {
  return (
    <HomeCard {...props} className={clsx(styles.wrapper, className)} center>
      {children}
    </HomeCard>
  );
}
