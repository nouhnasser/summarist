import styles from "../styles/numbers.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faLeaf,
  faStar,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";

export default function Numbers() {
  return (
    <>
      <section id="numbers">
        <div className="container">
          <div className="row">
            <div className="section__title">
              Start growing with Summarist now
            </div>
            <div className={styles.numbers__wrapper}>
              <div className={styles.numbers}>
                <div className={styles.numbers__icon}>
                  <FontAwesomeIcon icon={faCrown} />
                </div>
                <div className={styles.numbers__title}>3 Million</div>
                <div className={styles.numbers__sub__title}>
                  Downloads on all platforms
                </div>
              </div>
              <div className={styles.numbers}>
                <div
                  className={`${styles.numbers__icon} ${styles.numbers__star__icon}`}
                >
                  {[...Array(4)].map((_, index) => (
                    <FontAwesomeIcon icon={faStar} key={index} />
                  ))}
                  <FontAwesomeIcon icon={faStarHalf} />
                </div>
                <div className={styles.numbers__title}>4.5 Stars</div>
                <div className={styles.numbers__sub__title}>
                  Average ratings on iOS and Google Play
                </div>
              </div>
              <div className={styles.numbers}>
                <div className={styles.numbers__icon}>
                  <FontAwesomeIcon icon={faLeaf} />
                </div>
                <div className={styles.numbers__title}>97%</div>
                <div className={styles.numbers__sub__title}>
                  Of Summarist members create a better reading habit
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
