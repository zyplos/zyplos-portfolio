import Footer from "../Footer";
import Navbar from "../Navbar";

import styles from "./styles.module.scss";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
