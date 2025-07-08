import styles from "./footer.module.css";
export default function Footer({}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.horizontalContainer}>
          <h1>Fake Store</h1>
          <div>
            <h4>About Us</h4>
            <p>Blog</p>
            <p>Careers</p>
            <p>Sell your items</p>
          </div>
          <div>
            <h4>Support</h4>
            <p>Help</p>
            <p>Delivery issues</p>
            <p>Product help</p>
          </div>
          <div>
            <h4>Community</h4>
            <p>Manufacturers</p>
            <p>Designers</p>
            <p>Testimonials</p>
          </div>
        </div>
        <p>© Copyright 2025 -Not a real company</p>
      </div>
    </>
  );
}
