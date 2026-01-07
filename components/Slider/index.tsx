import {
  Slider as BaseSlider,
  type SliderRootProps,
} from "@base-ui-components/react";
import styles from "./styles.module.scss";

interface SliderProps extends SliderRootProps {}

export default function Slider({ className, ...props }: SliderProps) {
  return (
    <BaseSlider.Root defaultValue={25} {...props} className={className}>
      <BaseSlider.Control className={styles.control}>
        <BaseSlider.Track className={styles.track}>
          <BaseSlider.Indicator className={styles.indicator} />
          <BaseSlider.Thumb className={styles.thumb} />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}
