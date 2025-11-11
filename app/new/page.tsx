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
      {/* Top Grid */}
      <div className={styles.introGridWrapper}>
        <ImageAreaCard className={styles.leftColumn} />

        {/* Right: Bio and Info Cards */}
        <div className={styles.rightColumn}>
          <BioCard />

          {/* VS Code and Latest Commit Cards */}
          <div className={styles.infoCardsGrid}>
            <DiscordStatusCard />
            <LatestCommitCard />
          </div>

          {/* Bottom Grid */}
          <div className={styles.bottomGrid}>
            <WalkCard />
            <WorkCard />
          </div>
        </div>
      </div>

      <CompaniesSection />
    </div>
  );
}
