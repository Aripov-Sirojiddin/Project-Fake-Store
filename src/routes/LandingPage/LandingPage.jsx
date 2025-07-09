import styles from "./LandingPage.module.css";

export default function LandingPage({}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 tabIndex="0">Be the reason for someone's smile!</h1>
        </div>
      </div>
      <div className={styles.content}>
        <h1 tabIndex="0">Previously Viewed Products</h1>
      </div>
    </>
  );
}
