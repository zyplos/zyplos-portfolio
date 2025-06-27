"use client";
import classNames from "classnames";
import cardStyles from "../Card/styles.module.scss";
import styles from "./styles.module.scss";
import { useRef } from "react";

interface VideoCardProps {
  title: string;
  children: React.ReactNode;
  src: string;
  overlay?: boolean;
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function VideoCard({
  title,
  children,
  src,
  overlay = false,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (prefersReducedMotion()) return;

    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={classNames(
        cardStyles.card,
        styles.hasVideoBg,
        styles.videoCard
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className={cardStyles.cardTitle}>{title}</p>

      {children}

      {overlay && <div className={styles.overlay} />}

      <video
        ref={videoRef}
        src={src}
        loop={true}
        muted={true}
        className={styles.videoBg}
        preload="auto"
        playsInline={true}
        disablePictureInPicture={true}
        disableRemotePlayback={true}
      />
    </div>
  );
}
