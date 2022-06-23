import Image from "next/image";
import headerImage from "../public/header.png";
import styles from "../styles/Home.module.css";
import SharedHead from "../components/sharedHead";

export default function Home() {
  return (
    <div className={styles.container}>
      <SharedHead />

      <main className={styles.main}>
        <Image data-testid="header-image" src={headerImage} alt="Inexplicable Games Logo"></Image>
        <p data-testid="intro-text-primary" className={styles.introTextPrimary}>
          A one man games company based in the UK, working with talented
          freelancers from around the world.
        </p>
        <p data-testid="intro-text-secondary" className={styles.introTextQuote}>
          <q>
            Two roads diverged in a wood, and I ... I took the one just covered
            with brambles, Got covered in cuts and barely made it out alive.
          </q> ~ Robert Frost
        </p>
      </main>

      <footer data-testid="footer" className={styles.footer}></footer>
    </div>
  );
}
