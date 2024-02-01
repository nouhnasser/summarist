import styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.wrapper}>
          <figure className={styles.figure}>
            <img className={styles.img} src="/assets/logo.png" alt="logo" />
          </figure>
          <ul className={styles.ul}>
            <li className={`${styles.li} ${styles.login}`}>Login</li>
            <li className={`${styles.li} ${styles.mobile}`}>About</li>
            <li className={`${styles.li} ${styles.mobile}`}>Contact</li>
            <li className={`${styles.li} ${styles.mobile}`}>Help</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
