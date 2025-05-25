import Image from "next/image";
import type { StaticImageData } from "next/image";
import styles from "./styles.module.scss";

export interface CardProps {
  children?: React.ReactNode;
  colorFrom?: string;
  colorTo?: string;
  title?: string;
  style?: React.CSSProperties;
  image?: StaticImageData;
}

export default function Card({
  children,
  colorFrom,
  colorTo,
  title,
  style,
  image,
}: CardProps) {
  return (
    <div
      className={styles.card}
      style={{
        ...(colorFrom &&
          colorTo && {
            backgroundImage: `linear-gradient(to bottom right, ${colorFrom}, ${colorTo})`,
          }),
        ...style,
      }}
    >
      <div className={styles.content}>
        <p className={styles.cardTitle}>{title}</p>
        {children}
      </div>

      {image && <Image src={image} alt="" className={styles.imagePreview} />}
    </div>
  );
}
