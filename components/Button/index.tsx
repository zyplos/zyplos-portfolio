import clsx from "clsx";
import { Button as BaseButton, type ButtonProps } from "@base-ui/react/button";
import styles from "./styles.module.scss";

type Props = ButtonProps & {
  variant?:
    | "default"
    | "brand"
    | "secondary"
    | "tertiary"
    | "brand-tonal"
    | "secondary-tonal"
    | "tertiary-tonal";
};

export default function Button({
  className,
  children,
  variant = "default",
  ...props
}: Props) {
  return (
    <BaseButton
      {...props}
      className={clsx(className, styles.button, variant && styles[variant])}
    >
      {children}
    </BaseButton>
  );
}
