import styles from "@/styles/NewHome.module.scss";
import BioCard from "@/components/HomeItems/BioCard";
import CompaniesSection from "@/components/HomeItems/CompaniesSection";
import ImageAreaCard from "@/components/HomeItems/ImageAreaCard";
import LatestCommitCard from "@/components/HomeItems/LatestCommitCard";
import WalkCard from "@/components/HomeItems/WalkCard";
import DiscordStatusCard from "@/components/HomeItems/DiscordStatusCard";
import WorkCard from "@/components/HomeItems/WorkCard";

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
    </div>
  );
}
