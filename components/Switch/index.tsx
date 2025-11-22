import { Switch as BaseSwitch, type SwitchRootProps } from '@base-ui-components/react/switch';
import clsx from "clsx";
import Check from "../Icons/Check";

import styles from "./styles.module.scss";

interface SwitchProps extends SwitchRootProps { }

export default function Switch({
    className,
    ...props
}: SwitchProps) {
    return (
        <BaseSwitch.Root {...props} className={clsx(className, styles.Switch)}>
            <BaseSwitch.Thumb className={styles.Thumb}>
                <Check className={styles.Icon} />
            </BaseSwitch.Thumb>
        </BaseSwitch.Root>
    );
}

