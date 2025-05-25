import styles from "./styles.module.scss";

export default function AnchorLink({
  children,
  href,
  ...props
}: { children: React.ReactNode; href: string; target?: string }) {
  return (
    <a href={href} {...props} className={styles.link}>
      {children}
    </a>
  );
}
