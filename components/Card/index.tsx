import styles from "./styles.module.scss";

export interface CardProps {
  children?: React.ReactNode;
  colorFrom?: string;
  colorTo?: string;
  title?: string;
  style?: React.CSSProperties;
}

export default function Card({ children, colorFrom, colorTo, title, style }: CardProps) {
  return (
    <div
      className={styles.card}
      style={{
        ...(colorFrom && colorTo && { backgroundImage: `linear-gradient(to bottom right, ${colorFrom}, ${colorTo})` }),
        ...style,
      }}
    >
      <p className={styles.cardTitle}>{title}</p>
      {children}
    </div>
  );
}
