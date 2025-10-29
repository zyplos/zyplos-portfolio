import styles from "./styles.module.scss";

interface RedImageCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function RedImageCard({ ...props }: RedImageCardProps) {
  return (
    <div {...props} className={`${styles.redImageCard} ${props.className || ''}`} />
  );
}