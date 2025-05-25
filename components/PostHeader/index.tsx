import styles from "./styles.module.scss";
import Image from "next/image";

import mePicture from "@/assets/me.png";

export interface HeaderProps {
  // children?: React.ReactNode;
  title: string;
  date: string;
  readTime: string;
}

export default function PostHeader({ title, date, readTime }: HeaderProps) {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      <div className={styles.infoToolbar}>
        <Image src={mePicture} alt="" width={32} height={32} />
        <p>&#x3C;- i wrote this</p>
        <p>•</p>
        <p>{date}</p>
        <p>•</p>
        <p>{readTime}</p>
      </div>
    </div>
  );
}
