import clsx from "clsx";
import Image from "next/image";

import { HomeCard, SmallHeading } from "@/components/HomeItems/HomeCard";
import FluidImageCard from "@/components/HomeItems/FluidImageCard";
import ImageAreaCard from "@/components/HomeItems/ImageAreaCard";
import BioCard from "@/components/HomeItems/BioCard";
import WalkCard from "@/components/HomeItems/WalkCard";
import WorkCard from "@/components/HomeItems/WorkCard";
import LatestCommitCard from "@/components/HomeItems/LatestCommitCard";
import DiscordStatusCard from "@/components/HomeItems/DiscordStatusCard";
import CompaniesSection from "@/components/HomeItems/CompaniesSection";
import {
  BackendCard,
  FrontendCard,
} from "@/components/HomeItems/LanguagesCard";
import YCGag from "@/components/HomeItems/YCGag";
import SettingsBar from "@/components/HomeItems/SettingsBar";

import styles from "@/styles/Home.module.scss";
import placeholderImg from "@/assets/placerholder.png";

export default function HomePage() {
  console.log(
    "%c%s",
    "color: #ffffff; font-family: monospace;",
    "--------------------",
  );
  console.log(
    "%c%s",
    "color: #ff3e3e; font-family: sans-serif;",
    "snooping as usual i see",
  );
  console.log(
    "%c%s",
    "color: #ffffff; font-family: sans-serif;",
    "i'm looking for a software engineer job. consider hiring me:",
  );
  console.log(
    "%c%s",
    "color: #ffd300; font-family: monospace;",
    "zyplos@duck.com",
  );
  console.log(
    "%c%s",
    "color: #ffffff; font-family: monospace;",
    "--------------------",
  );

  return (
    <div className={styles.wrapper}>
      {/* above fold START */}
      <div className={styles.introGridWrapper}>
        <ImageAreaCard className={styles.leftColumn} />

        {/* right START */}
        <div className={styles.rightColumn}>
          <BioCard />

          {/* middle grid */}
          <div className={styles.infoCardsGrid}>
            <DiscordStatusCard />
            <LatestCommitCard />
          </div>

          {/* bottom grid */}
          <div className={styles.bottomGrid}>
            <WalkCard className={styles.walkCard} />
            <WorkCard />
          </div>
        </div>
        {/* right END */}
      </div>
      {/* above fold END */}

      <CompaniesSection />

      <div
        className={clsx(styles.ycGagAndSettingsRow, styles.mobileScrollMask)}
      >
        <YCGag />
        <SettingsBar />
      </div>

      <div className={styles.stuffIDoGrid}>
        <BackendCard className={styles.backendCard} />
        <FluidImageCard className={styles.backendImg}>
          <Image src={placeholderImg} alt="PLACEHOLDER" />
        </FluidImageCard>
        <FluidImageCard className={styles.frontendImg}>
          <Image src={placeholderImg} alt="PLACEHOLDER" />
        </FluidImageCard>
        <FrontendCard className={styles.frontendCard} />
      </div>
    </div>
  );
}
