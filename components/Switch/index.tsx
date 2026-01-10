import {
  Switch as BaseSwitch,
  type SwitchRootProps,
} from "@base-ui/react/switch";
import clsx from "clsx";
import Check from "../Icons/Check";

import styles from "./styles.module.scss";

interface SwitchProps extends SwitchRootProps {}

export default function Switch({ className, ...props }: SwitchProps) {
  return (
    <BaseSwitch.Root {...props} className={clsx(className, styles.switch)}>
      <BaseSwitch.Thumb className={styles.thumb}>
        <Check className={styles.icon} />
      </BaseSwitch.Thumb>
    </BaseSwitch.Root>
  );
}
