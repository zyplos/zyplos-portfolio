import clsx from "clsx";
import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import CheckIcon from "@/components/Icons/Check";
import styles from "./styles.module.scss";

interface CheckboxProps
  extends React.ComponentProps<typeof BaseCheckbox.Root> {}

export default function Checkbox({
  children,
  className,
  ...props
}: CheckboxProps) {
  return (
    <BaseCheckbox.Root {...props} className={clsx(styles.root, className)}>
      <BaseCheckbox.Indicator className={styles.indicator}>
        <CheckIcon />
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );
}
