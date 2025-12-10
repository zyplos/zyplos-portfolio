import styles from "@/styles/NewHome.module.scss";
import BioCard from "@/components/HomeItems/BioCard";
import CompaniesSection from "@/components/HomeItems/CompaniesSection";
import ImageAreaCard from "@/components/HomeItems/ImageAreaCard";
import LatestCommitCard from "@/components/HomeItems/LatestCommitCard";
import WalkCard from "@/components/HomeItems/WalkCard";
import DiscordStatusCard from "@/components/HomeItems/DiscordStatusCard";
import WorkCard from "@/components/HomeItems/WorkCard";
import { HomeCard, SmallHeading } from "@/components/HomeItems/HomeCard";
import {
  BackendCard,
  FrontendCard,
} from "@/components/HomeItems/LanguagesCard";
import FluidImageCard from "@/components/HomeItems/FluidImageCard";
import Image from "next/image";

import placeholderImg from "@/assets/placerholder.png";
import YCGag from "@/components/HomeItems/YCGag";
import SettingsBar from "@/components/HomeItems/SettingsBar";
import clsx from "clsx";

export default function PortfolioPage() {
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
        className={clsx(styles.ycGagAndSettingsRow, "scrollMaskX")}
        data-style="size"
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
