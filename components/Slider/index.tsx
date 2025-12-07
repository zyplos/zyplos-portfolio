import clsx from "clsx";
import styles from "./styles.module.scss";
import {
  Slider as BaseSlider,
  type SliderRootProps,
} from "@base-ui-components/react";

interface SliderProps extends SliderRootProps {}

export default function Slider({ ...props }: SliderProps) {
  return (
    <BaseSlider.Root defaultValue={25} {...props}>
      <BaseSlider.Control className={styles.control}>
        <BaseSlider.Track className={styles.track}>
          <BaseSlider.Indicator className={styles.indicator} />
          <BaseSlider.Thumb className={styles.thumb} />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}
