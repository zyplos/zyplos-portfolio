import styles from "./styles.module.scss";

interface BioCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function BioCard({ ...props }: BioCardProps) {
  return (
    <div {...props} className={`${styles.card} ${props.className || ''}`}>
      <h1 className={styles.bioTitle}>programmer, designer</h1>
      <p className={styles.bioText}>
        {"i'm a developer who's worked with the web and various other things for many years now"}
      </p>
      <p className={styles.bioText}>
        {"i like spending my time making stuff and i'm always happy to learn something new. come see some of my stuff on this site"}
      </p>
    </div>
  );
}