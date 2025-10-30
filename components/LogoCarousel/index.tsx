// adapted from https://github.com/kreudev/react-infinite-logo-slider
import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export interface LogoCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement[];
  width?: string;
  duration?: number;
  toRight?: boolean;
  pauseOnHover?: boolean;
  blurBorders?: boolean;
  blurBorderColor?: string;
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
    <div className={`${styles.logoCarousel} ${className || ""}`}>
      <div
        className={`${styles.wrapper} ${pauseOnHover ? styles.pauseOnHover : ""}`}
      >
        <div
          className={`${styles.slider} ${toRight ? styles.toRight : ""}`}
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
            className={classNames(styles.carouselFade, styles.left)}
            style={blurStyle}
          />

          <div
            className={classNames(styles.carouselFade, styles.right)}
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
