import styles from "./styles.module.scss";
import Image from "next/image";
import testTileImg from "@/assets/tile.png";

export default function StatusText() {
  return (
    <>
      <p className={`${styles.statusText} ${styles.online}`}>⬤ Currently Online</p>
      <div className={styles.richPresence}>
        <Image src={testTileImg} alt=">>>" priority />
        <div>
          <p>Editing: index.js</p>
          <p>Workspace: lounge-hub</p>
        </div>
      </div>
    </>
  );
}
