import classNames from "classnames";
import cardStyles from "../Card/styles.module.scss";
import { CardProps } from "../Card";

import Image from "next/image";
import commandBlockImg from "@/assets/command-block.png";
import emblemMCImg from "@/assets/emblemmc.png";
import readmeCardImg from "@/assets/readme-card.png";
import sparkleMainImg from "@/assets/sparklemain.png";
import sparkleLeftImg from "@/assets/sparkleleft.png";
import sparkleRightImg from "@/assets/sparkleright.png";

import styles from "./styles.module.scss";

export function LoungeCard({ style }: CardProps) {
  return (
    <div
      className={classNames(cardStyles.card, styles.loungeHubCard)}
      style={{
        ...style,
      }}
    >
      <p className={cardStyles.cardTitle}>lounge-hub</p>
      <p>community site for my minecraft stuff</p>

      <Image src={commandBlockImg} alt="command block" quality={100} className={styles.loungeHubCardBlock} />
      <Image src={emblemMCImg} alt="emblem" quality={100} className={styles.loungeHubCardEmblem} />
    </div>
  );
}

export function DiscordREADMECard({ style }: CardProps) {
  return (
    <div
      className={classNames(cardStyles.card, styles.discordREADMEBadgeCard)}
      style={{
        ...style,
      }}
    >
      <p className={cardStyles.cardTitle}>Discord README Badge</p>
      <p>community site</p>
      <p>discord stuff</p>

      {/* <Image src={readmeCardImg} alt="readme card" quality={100} className={styles.readmeCardRender} /> */}
      {/* <Image src={emblemMCImg} alt="emblem" quality={100} className={styles.loungeHubCardEmblem} /> */}
      <Image src={sparkleMainImg} alt="spark" quality={100} className={styles.discordREADMESparkleMain} />
      <Image src={sparkleLeftImg} alt="spark" quality={100} className={styles.discordREADMESparkleLeft} />
      <Image src={sparkleRightImg} alt="spark" quality={100} className={styles.discordREADMESparkleRight} />
    </div>
  );
}
