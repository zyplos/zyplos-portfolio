import clsx from "clsx";
import styles from "./styles.module.scss";
import { HomeCard } from "../HomeCard";

interface SettingsBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function SettingsBar({
  className,
  children,
  ...props
}: SettingsBarProps) {
  return (
    <>
      <HomeCard
        {...props}
        className={clsx(className, styles.flexRow)}
        padding="m"
      >
        <button type="button">playful</button>
        <button type="button">switch</button>
        <button type="button">custom</button>
      </HomeCard>

      {/* key: roundedCorners */}
      <HomeCard
        {...props}
        className={clsx(className, styles.flexRow)}
        padding="m"
      >
        <p>Rounded Corners</p>
        <input type="checkbox" />
      </HomeCard>

      {/* key: spacing */}
      <HomeCard
        {...props}
        className={clsx(className, styles.flexRow)}
        padding="m"
      >
        <p>compact</p>
        <p>(switch)</p>
        <p>cozy</p>
      </HomeCard>

      {/* key: theme */}
      <HomeCard
        {...props}
        className={clsx(className, styles.flexRow)}
        padding="m"
      >
        <button type="button">sandstone</button>
        <button type="button">slate</button>
        <button type="button">classic</button>
      </HomeCard>

      <HomeCard className={clsx(className, styles.flexGrow)} padding="m" center>
        placeholder
      </HomeCard>
    </>
  );
}
