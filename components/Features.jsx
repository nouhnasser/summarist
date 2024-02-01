import styles from "../styles/features.module.css";

export default function Features() {
  return (
    <>
      <section id="features">
        <div className="container">
          <div className="row">
            <div className="section__title">
              Understand books in few minutes
            </div>
            <div className={styles.features__wrapper}>
              <div className={styles.features}>
                <div className={styles.features__icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className={styles.features__title}>Read or listen</div>
                <div className={styles.features__sub__title}>
                  Save time by getting the core ideas from the best books.
                </div>
              </div>
              <div className={styles.features}>
                <div className={styles.features__icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                </div>
                <div className={styles.features__title}>
                  Find your next read
                </div>
                <div className={styles.features__sub__title}>
                  Explore book lists and personalized recommendations.
                </div>
              </div>
              <div className={styles.features}>
                <div className={styles.features__icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className={styles.features__title}>Briefcasts</div>
                <div className={styles.features__sub__title}>
                  Gain valuable insights from briefcasts
                </div>
              </div>
            </div>
            <div className={styles.statistics__wrapper}>
              <div className={styles.statistics__content__header}>
                <div className={styles.statistics__heading}>
                  Enhance your knowledge
                </div>
                <div className={styles.statistics__heading}>
                  Achieve greater success
                </div>
                <div className={styles.statistics__heading}>
                  Improve your health
                </div>
                <div className={styles.statistics__heading}>
                  Develop better parenting skills
                </div>
                <div className={styles.statistics__heading}>
                  Increase happiness
                </div>
                <div className={styles.statistics__heading}>
                  Be the best version of yourself!
                </div>
              </div>
              <div className={styles.statistics__content__details}>
                <div className={styles.statistics__data}>
                  <div className={styles.statistics__data__number}>93%</div>
                  <div className={styles.statistics__data__title}>
                    of Summarist members{" "}
                    <span className="bold">significantly increase</span> reading
                    frequency.
                  </div>
                </div>
                <div className={styles.statistics__data}>
                  <div className={styles.statistics__data__number}>96%</div>
                  <div className={styles.statistics__data__title}>
                    of Summarist members{" "}
                    <span className="bold">establish better</span> habits.
                  </div>
                </div>
                <div className={styles.statistics__data}>
                  <div className={styles.statistics__data__number}>90%</div>
                  <div className={styles.statistics__data__title}>
                    have made <span className="bold">significant positive</span>{" "}
                    change to their lives.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.statistics__wrapper}>
              <div
                className={`${styles.statistics__content__details} ${styles.statistics__content__details_second}`}
              >
                <div className={styles.statistics__data}>
                  <div className={styles.statistics__data__number}>91%</div>
                  <div className={styles.statistics__data__title}>
                    of Summarist members{" "}
                    <span className="bold">
                      report feeling more productive{" "}
                    </span>
                    after incorporating the service into their daily routine.
                  </div>
                </div>
                <div className={styles.statistics__data}>
                  <div className={styles.statistics__data__number}>94%</div>
                  <div className={styles.statistics__data__title}>
                    of Summarist members have{" "}
                    <span className="bold">noticed an improvement</span> in
                    their overall comprehension and retention of information.
                  </div>
                </div>
                <div className={styles.statistics__data}>
                  <div className={styles.statistics__data__number}>88%</div>
                  <div className={styles.statistics__data__title}>
                    of Summarist members{" "}
                    <span className="bold">feel more informed</span> about
                    current events and industry trends since using the platform.
                  </div>
                </div>
              </div>
              <div
                className={`${styles.statistics__content__header}                                         ${styles.statistics__content__header_second}`}
              >
                <div className={styles.statistics__heading}>
                  Expand your learning
                </div>
                <div className={styles.statistics__heading}>
                  Accomplish your goals
                </div>
                <div className={styles.statistics__heading}>
                  Strengthen your vitality
                </div>
                <div className={styles.statistics__heading}>
                  Become a better caregiver
                </div>
                <div className={styles.statistics__heading}>
                  Improve your mood
                </div>
                <div className={styles.statistics__heading}>
                  Maximize your abilities
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
