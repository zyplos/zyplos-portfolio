import PostgreSQLLogo from "@/components/Icons/PostgreSQLLogo";
import BunLogo from "@/components/Logos/BunLogo";
import TwitterLogo from "@/components/Icons/TwitterLogo";
import GoogleLogo from "@/components/Icons/GoogleLogo";
import Twitter from "@/components/Icons/TwitterIcon";
import LogoCarousel from "@/components/LogoCarousel";
import styles from "@/styles/NewHome.module.scss";

export default function PortfolioPage() {
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
              width="200px"
              duration={20}
              pauseOnHover={false}
              blurBorders={true}
              blurBorderColor={"#e8ddd0"}
              className={styles.logoCarousel}
            >
              <LogoCarousel.Slide>
                <GoogleLogo />
              </LogoCarousel.Slide>
              <LogoCarousel.Slide>
                <TwitterLogo />
              </LogoCarousel.Slide>
              <LogoCarousel.Slide>
                <BunLogo />
              </LogoCarousel.Slide>
              <LogoCarousel.Slide>
                <PostgreSQLLogo />
              </LogoCarousel.Slide>
              <LogoCarousel.Slide>
                <DiscordLogo />
              </LogoCarousel.Slide>
              <LogoCarousel.Slide>
                <SpotifyLogo />
              </LogoCarousel.Slide>
              <LogoCarousel.Slide>
                <ZedLogo />
              </LogoCarousel.Slide>
            </LogoCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
