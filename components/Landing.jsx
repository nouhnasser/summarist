import styles from "../styles/landing.module.css";
import LoginModal from "./modals/LoginModal";

export default function Landing() {
  return (
    <>
      <section id="landing">
        <div className="container">
          <div className="row">
            <div className={styles.landing__wrapper}>
              <div className={styles.landing__content}>
                <div className={styles.landing__content__title}>
                  Gain more knowledge <br className={styles.remove__tablet} />
                  in less time
                </div>
                <div className={styles.landing__content__subtitle}>
                  Great summaries for busy people,
                  <br className={styles.remove__tablet} />
                  individuals who barely have time to read,
                  <br className={styles.remove__tablet} />
                  and even people who don’t like to read.
                </div>
                <LoginModal />
              </div>
              <figure className={styles.landing__image__mask}>
                <img
                  className={styles.img}
                  src="/assets/landing.png"
                  alt="landing"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
