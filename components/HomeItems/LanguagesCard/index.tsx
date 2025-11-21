/** biome-ignore-all lint/correctness/useJsxKeyInIterable: no */
import Image, { type StaticImageData } from "next/image";
import clsx from "clsx";
import { HomeCard, type HomeCardProps } from "../HomeCard";
import GradientBlur from "@/components/GradientBlur";

import styles from "./styles.module.scss";
import backendGraphic from "@/assets/home/backend-graphic.png";
import frontendGraphic from "@/assets/home/frontend-graphic.png";

interface ContentCardProps extends HomeCardProps {
  logos?: React.ReactNode[];
  image: StaticImageData | string;
  imageAlt?: string;
}

export function ContentCard({
  className,
  logos,
  image,
  imageAlt = "",
  children,
  padding = "none",
  ...props
}: ContentCardProps) {
  return (
    <HomeCard
      {...props}
      className={clsx(styles.card, styles.noOverflow, className)}
      padding={padding}
    >
      <div className={clsx("textContent", styles.cardPaddingWithoutBottom)}>
        {children}
      </div>

      <div className={styles.graphic}>
        {/*{logos && (
          <div className={styles.logoStack}>
            {logos.map((logo, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: is ok
              <React.Fragment key={i}>{logo}</React.Fragment>
            ))}
          </div>
        )}*/}
        <Image src={image} alt={imageAlt} className={styles.image} />
        <GradientBlur />
      </div>
    </HomeCard>
  );
}

export function BackendCard({ className, ...props }: HomeCardProps) {
  return (
    <ContentCard {...props} className={className} image={backendGraphic}>
      <h2>i do backend stuff</h2>
      <p>
        i primarily work with typescript but used to do a lot of javascript and
        i sometimes work in java and python
      </p>
    </ContentCard>
  );
}

export function FrontendCard({ className, ...props }: HomeCardProps) {
  return (
    <ContentCard {...props} className={className} image={frontendGraphic}>
      <h2>i do frontend stuff</h2>
      <p>
        i work with next.js and react a lot but i like svelte or just working
        with javascript. i like writing css over tailwind
      </p>
    </ContentCard>
  );
}
