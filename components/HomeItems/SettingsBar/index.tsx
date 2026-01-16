"use client";

import clsx from "clsx";
import styles from "./styles.module.scss";
import { HomeCard, type HomeCardProps } from "../HomeCard";
import Switch from "@/components/Switch";
import { type Theme, useSettings } from "@/context/SettingsContext";
import Slider from "@/components/Slider";
import ButtonGroup, { ButtonGroupItem } from "@/components/ButtonGroup";

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
        className={className}
        padding="m"
        center
        gap="default"
      >
        <p className="noWrap">Rounded Corners</p>
        <input
          type="checkbox"
          checked={roundedCorners}
          onChange={(e) => setRoundedCorners(e.target.checked)}
        />
      </HomeCard>

      {/* key: theme */}
      <HomeCard {...props} className={className} padding="m" center gap="xxs">
        <ButtonGroup
          value={theme ? [theme] : []}
          onValueChange={(val) => val[0] && setTheme(val[0] as Theme)}
          variant="secondary"
        >
          <ButtonGroupItem value="sandstone">sandstone</ButtonGroupItem>
          <ButtonGroupItem value="slate">slate</ButtonGroupItem>
          <ButtonGroupItem value="classic">classic</ButtonGroupItem>
        </ButtonGroup>
      </HomeCard>

      {/* key: spacing */}
      <HomeCard
        {...props}
        className={className}
        padding="m"
        center
        gap="default"
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

      <HomeCard {...props} className={className} padding="m" center>
        placeholder graphic
      </HomeCard>

      <HomeCard
        className={clsx(className, styles.flexGrow)}
        padding="m"
        gap="default"
        center
      >
        Bumpscosity
        <Slider
          defaultValue={64}
          className={clsx(styles.flexGrow, styles.sliderMinWidth)}
        />
      </HomeCard>
    </>
  );
}
