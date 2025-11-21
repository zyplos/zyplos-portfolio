import styles from "./styles.module.css";

interface GradientBlurProps {
  height?: string | number;
  style?: React.CSSProperties;
  className?: string;
}

export default function GradientBlur({
  height,
  style,
  className = "",
}: GradientBlurProps) {
  return (
    <div
      className={`${styles.gradientBlur} ${className}`}
      style={{
        ...(height !== undefined ? { height } : {}),
        ...style,
      }}
    >
      <div className={styles.blurLayer1}></div>
      <div className={styles.blurLayer2}></div>
      <div className={styles.blurLayer3}></div>
      <div className={styles.blurLayer4}></div>
      <div className={styles.blurLayer5}></div>
      <div className={styles.blurLayer6}></div>

      <div className={styles.colorGradientFallback}></div>
    </div>
  );
}
