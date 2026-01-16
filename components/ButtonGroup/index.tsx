import { ToggleGroup } from "@base-ui/react/toggle-group";
import { Toggle } from "@base-ui/react/toggle";
import clsx from "clsx";
import buttonStyles from "../Button/styles.module.scss";
import styles from "./styles.module.scss";

interface ButtonGroupProps extends React.ComponentProps<typeof ToggleGroup> {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "tertiary";
}

export default function ButtonGroup({
  className,
  children,
  variant = "secondary",
  ...props
}: ButtonGroupProps) {
  return (
    <ToggleGroup
      {...props}
      className={clsx(styles.buttonGroup, styles[variant], className)}
    >
      {children}
    </ToggleGroup>
  );
}

interface ButtonGroupItemProps
  extends React.ComponentProps<typeof Toggle> {
  children: React.ReactNode;
  value: string;
}

export function ButtonGroupItem({
  className,
  children,
  value,
  ...props
}: ButtonGroupItemProps) {
  return (
    <Toggle
      value={value}
      className={clsx(buttonStyles.button, styles.item, className)}
      {...props}
    >
      {children}
    </Toggle>
  );
}
