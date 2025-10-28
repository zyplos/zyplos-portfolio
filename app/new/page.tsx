import LogoCarousel from "@/components/LogoCarousel";
import styles from "@/styles/NewHome.module.scss";

import ApertureLaboratories from "@/components/Logos/ApertureLaboratories";
import BlackMesa from "@/components/Logos/BlackMesa";
import Bluesky from "@/components/Logos/Bluesky";
import Bun from "@/components/Logos/Bun";
import Cursor from "@/components/Logos/Cursor";
import Discord from "@/components/Logos/Discord";
import GitHub from "@/components/Logos/GitHub";
import Google from "@/components/Logos/Google";
import Microsoft from "@/components/Logos/Microsoft";
import PostgreSQL from "@/components/Logos/PostgreSQL";
import Shopify from "@/components/Logos/Shopify";
import Spotify from "@/components/Logos/Spotify";
import Stripe from "@/components/Logos/Stripe";
import Twitter from "@/components/Logos/Twitter";
import Zed from "@/components/Logos/Zed";

export default function PortfolioPage() {
  const logos = [
    Google,
    Bun,
    Discord,
    Spotify,
    GitHub,
    ApertureLaboratories,
    Microsoft,
    PostgreSQL,
    Zed,
    Bluesky,
    Shopify,
    Cursor,
    BlackMesa,
    Stripe,
    Twitter,
  ];

  return (
    <div className={styles.portfolioPage}>
      <div className={styles.portfolioContainer}>
        {/* Top Grid */}
        <div className={styles.topGrid}>
          {/* Left: Large Image Area */}
          <div className={styles.imageAreaCard}>
            <div className={styles.imageArea}>
              <span className={styles.imageAreaText}>image area</span>
            </div>
          </div>

          {/* Right: Bio and Info Cards */}
          <div className={styles.rightColumn}>
            {/* Bio Card */}
            <div className={`${styles.card} ${styles.bioCard}`}>
              <h1 className={styles.bioTitle}>programmer, designer</h1>
              <p className={styles.bioText}>
                {
                  "i'm a developer who's worked with the web and various other things for many years now"
                }
              </p>
              <p className={styles.bioText}>
                {
                  "i like spending my time making stuff and i'm always happy to learn something new. come see some of my stuff on this site"
                }
              </p>
            </div>

            {/* VS Code and Latest Commit Cards */}
            <div className={styles.infoCardsGrid}>
              {/* VS Code Card */}
              <div className={`${styles.card} ${styles.vscodeCard}`}>
                <h2 className={styles.cardTitle}>
                  Working in{" "}
                  <span className={styles.bold}>Visual Studio Code</span>
                </h2>
                <div className={styles.vscodeContent}>
                  <div className={styles.vscodeIconWrapper}>
                    <div className={styles.vscodeIcon} />
                    <div className={styles.vscodeStatusDot} />
                  </div>
                  <div className={styles.vscodeInfo}>
                    <p className={styles.vscodeDetail}>Editing: index.tsx</p>
                    <p className={styles.vscodeDetail}>Workspace: localhost</p>
                  </div>
                </div>
              </div>

              {/* Latest Commit Card */}
              <div className={`${styles.card} ${styles.commitCard}`}>
                <h2 className={styles.cardTitle}>Latest commit</h2>
                <div className={styles.commitBranches}>
                  <div className={styles.commitDot} />
                  <span className={styles.commitBranch}>zyplos/quip</span>
                  <div className={styles.commitDot} />
                  <span className={styles.commitBranch}>main</span>
                </div>
                <p className={styles.commitMessage}>
                  Tweet: component now takes class names...
                </p>
                <p className={styles.commitTime}>2m ago</p>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className={styles.bottomGrid}>
              {/* Red Image Card */}
              <div className={styles.redImageCard} />

              {/* Looking for Work Card */}
              <div className={`${styles.card} ${styles.workCard}`}>
                <h2 className={styles.workTitle}>{"i'm looking for work!"}</h2>
                <p className={styles.bioText}>
                  {
                    "i'm a developer who's worked with the web and various other things for many years now"
                  }
                </p>
                <p className={styles.bioText}>
                  {
                    "i like spending my time making stuff and i'm always happy to learn something new. come see some of my stuff on this site"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Companies Section */}
        <div className={styles.companiesSection}>
          <h2 className={styles.companiesTitle}>Companies I Like</h2>
          <div className={styles.carouselWrapper}>
            {/* Scrolling carousel */}
            <LogoCarousel
              width="250px"
              duration={40}
              pauseOnHover={false}
              blurBorders={true}
              blurBorderColor={"#e8ddd0"}
              className={styles.logoCarousel}
            >
              {logos.map((LogoComponent, index) => (
                <LogoCarousel.Slide
                  key={`logo-${
                    // biome-ignore lint/suspicious/noArrayIndexKey: is ok
                    index
                  }`}
                >
                  <LogoComponent />
                </LogoCarousel.Slide>
              ))}
            </LogoCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
