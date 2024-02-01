import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/reviews.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import LoginModal from "./modals/LoginModal";

export default function Reviews() {
  return (
    <>
      <section id="reviews">
        <div className="row">
          <div className="container">
            <div className="section__title">What our members say</div>
            <div className={styles.reviews__wrapper}>
              <div className={styles.review}>
                <div className={styles.review__header}>
                  <div className={styles.review__name}>Hanna M.</div>
                  <div className={styles.review__stars}>
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon icon={faStar} key={index} />
                    ))}
                  </div>
                </div>
                <div className={styles.review__body}>
                  This app has been a <span className="bold">game-changer</span>{" "}
                  for me! It's saved me so much time and effort in reading and
                  comprehending books. Highly recommend it to all book lovers.
                </div>
              </div>
              <div className={styles.review}>
                <div className={styles.review__header}>
                  <div className={styles.review__name}>David B.</div>
                  <div className={styles.review__stars}>
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon icon={faStar} key={index} />
                    ))}
                  </div>
                </div>
                <div className={styles.review__body}>
                  I love this app! It provides
                  <span className="bold">
                    concise and accurate summaries
                  </span>{" "}
                  of books in a way that is easy to understand. It's also very
                  user-friendly and intuitive.
                </div>
              </div>
              <div className={styles.review}>
                <div className={styles.review__header}>
                  <div className={styles.review__name}>Nathan S.</div>
                  <div className={styles.review__stars}>
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon icon={faStar} key={index} />
                    ))}
                  </div>
                </div>
                <div className={styles.review__body}>
                  This app is a great way to get the main takeaways from a book
                  without having to read the entire thing.
                  <span className="bold">
                    The summaries are well-written and informative.
                  </span>
                  Definitely worth downloading.
                </div>
              </div>
              <div className={styles.review}>
                <div className={styles.review__header}>
                  <div className={styles.review__name}>Ryan R.</div>
                  <div className={styles.review__stars}>
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon icon={faStar} key={index} />
                    ))}
                  </div>
                </div>
                <div className={styles.review__body}>
                  If you're a busy person who
                  <span className="bold">
                    loves reading but doesn't have the time
                  </span>{" "}
                  to read every book in full, this app is for you! The summaries
                  are thorough and provide a great overview of the book's
                  content.
                </div>
              </div>
            </div>
            <div className={styles.reviews__btn__wrapper}>
              <LoginModal />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
