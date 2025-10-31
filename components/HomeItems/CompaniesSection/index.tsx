import clsx from "clsx";
import HomeCard from "../HomeCard";
import LogoCarousel from "@/components/LogoCarousel";
import styles from "./styles.module.scss";

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

interface CompaniesSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function CompaniesSection({
  className,
  ...props
}: CompaniesSectionProps) {
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
    <HomeCard {...props} className={clsx(styles.companiesCard, className)}>
      <h2 className={styles.title}>Companies I Like</h2>
      <div className={styles.carouselWrapper}>
        <LogoCarousel
          width="250px"
          duration={40}
          pauseOnHover={false}
          blurBorders={true}
          blurBorderColor={"#e8ddd0"}
          className={styles.svgStyling}
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
    </HomeCard>
  );
}
