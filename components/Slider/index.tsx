import clsx from "clsx";
import styles from "./styles.module.scss";
import {
  Slider as BaseSlider,
  type SliderRootProps,
} from "@base-ui-components/react";

interface SliderProps extends SliderRootProps {}

export default function Slider({ className, children, ...props }: SliderProps) {
  return (
    <BaseSlider.Root defaultValue={25} {...props}>
      <BaseSlider.Control className={styles.Control}>
        <BaseSlider.Track className={styles.Track}>
          <BaseSlider.Indicator className={styles.Indicator} />
          <BaseSlider.Thumb className={styles.Thumb} />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}
