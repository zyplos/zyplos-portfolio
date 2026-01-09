import clsx from "clsx";
import { Button as BaseButton, type ButtonProps } from "@base-ui/react/button";
import styles from "./styles.module.scss";

type Props = ButtonProps & {
  variant?: "primary" | "secondary" | "tertiary";
};

export default function Button({
  className,
  children,
  variant,
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
