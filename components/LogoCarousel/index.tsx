// adapted from https://github.com/kreudev/react-infinite-logo-slider
/** biome-ignore-all lint/suspicious/noArrayIndexKey: array won't change */
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

export interface LogoCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement[];
  width?: string;
  duration?: number;
  toRight?: boolean;
  pauseOnHover?: boolean;
  blurBorders?: boolean;
  blurBorderColor?: string;
  sliderClassName?: string;
}

export interface SlideProps {
  children: React.ReactNode;
}

const LogoCarousel: React.FC<LogoCarouselProps> & {
  Slide: React.FC<SlideProps>;
} = ({
  children,
  width = "200px",
  duration = 40,
  toRight = false,
  pauseOnHover = false,
  blurBorders = false,
  blurBorderColor = "#fff",
  className,
  sliderClassName,
}) => {
  const sliderStyle = {
    "--slide-width": width,
    "--children-length": children.length,
    "--duration": `${duration}s`,
  } as React.CSSProperties;

  const blurStyle = {
    "--blur-border-color": blurBorderColor,
  } as React.CSSProperties;

  return (
    <div className={clsx(styles.logoCarousel, className)}>
      <div
        className={clsx(styles.wrapper, pauseOnHover && styles.pauseOnHover)}
      >
        <div
          className={clsx(
            styles.slider,
            toRight && styles.toRight,
            sliderClassName,
          )}
          style={sliderStyle}
        >
          {children.map((child, i) => (
            <React.Fragment key={`one-${i}`}>{child}</React.Fragment>
          ))}
          {children.map((child, i) => (
            <React.Fragment key={`two-${i}`}>{child}</React.Fragment>
          ))}
          {children.map((child, i) => (
            <React.Fragment key={`three-${i}`}>{child}</React.Fragment>
          ))}
        </div>
      </div>

      {blurBorders && (
        <>
          <div
            className={clsx(styles.carouselFade, styles.left)}
            style={blurStyle}
          />

          <div
            className={clsx(styles.carouselFade, styles.right)}
            style={blurStyle}
          />
        </>
      )}
    </div>
  );
};

const Slide: React.FC<SlideProps> = ({ children, ...props }) => {
  return (
    <div className={styles.slide} {...props}>
      {children}
    </div>
  );
};

LogoCarousel.Slide = Slide;

export default LogoCarousel;
