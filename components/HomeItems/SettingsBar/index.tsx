"use client";

import clsx from "clsx";
import styles from "./styles.module.scss";
import { HomeCard, type HomeCardProps } from "../HomeCard";
import Switch from "@/components/Switch";
import { useSettings } from "@/context/SettingsContext";
import Slider from "@/components/Slider";

interface SettingsBarProps extends HomeCardProps {}

export default function SettingsBar({
  className,
  children,
  ...props
}: SettingsBarProps) {
  const {
    theme,
    setTheme,
    //
    spacing,
    setSpacing,
    //
    formality,
    setFormality,
    //
    roundedCorners,
    setRoundedCorners,
  } = useSettings();

  return (
    <>
      <HomeCard
        {...props}
        className={clsx(className, styles.flexRow)}
        padding="m"
        center
      >
        <p>playful</p>
        <Switch
          checked={formality === "serious"}
          onCheckedChange={(checked) =>
            setFormality(checked ? "serious" : "playful")
          }
        />
        <p>Serious</p>
      </HomeCard>

      {/* key: roundedCorners */}
      <HomeCard
        {...props}
        className={clsx(className, styles.flexRow)}
        padding="m"
        center
      >
        <p>Rounded Corners</p>
        <input
          type="checkbox"
          checked={roundedCorners}
          onChange={(e) => setRoundedCorners(e.target.checked)}
        />
      </HomeCard>

      {/* key: spacing */}
      <HomeCard
        {...props}
        className={clsx(className, styles.flexRow)}
        padding="m"
        center
      >
        <p>compact</p>
        <Switch
          checked={spacing === "cozy"}
          onCheckedChange={(checked) =>
            setSpacing(checked ? "cozy" : "compact")
          }
        />
        <p>cozy</p>
      </HomeCard>

      {/* key: theme */}
      <HomeCard
        {...props}
        className={clsx(className, styles.flexRow)}
        padding="m"
        center
      >
        <button
          type="button"
          onClick={() => setTheme("sandstone")}
          className={theme === "sandstone" ? styles.active : ""}
        >
          sandstone
        </button>
        <button
          type="button"
          onClick={() => setTheme("slate")}
          className={theme === "slate" ? styles.active : ""}
        >
          slate
        </button>
        <button
          type="button"
          onClick={() => setTheme("classic")}
          className={theme === "classic" ? styles.active : ""}
        >
          classic
        </button>
      </HomeCard>

      <HomeCard
        className={clsx(className, styles.flexGrow)}
        padding="m"
        gap="default"
        center
      >
        Bumpscosity
        <Slider
          defaultValue={25}
          className={clsx(styles.flexGrow, styles.sliderMinWidth)}
        />
      </HomeCard>
    </>
  );
}
