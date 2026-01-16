import clsx from "clsx";
import { Button as BaseButton, type ButtonProps } from "@base-ui/react/button";
import styles from "./styles.module.scss";

type Props = ButtonProps & {
  variant?:
    | "default"
    | "brand"
    | "primary"
    | "tertiary"
    | "brand-tonal"
    | "primary-tonal"
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
