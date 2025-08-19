import styles from "./footer.module.css";
export default function Footer({}) {
  function placeholderAlert() {
    alert("This is a placeholder link to mimic a complete web app.");
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.horizontalContainer}>
          <h1>Fake Store</h1>
          <div>
            <h4>About Us</h4>
            <p onClick={placeholderAlert}>Blog</p>
            <p onClick={placeholderAlert}>Careers</p>
            <p onClick={placeholderAlert}>Sell your items</p>
          </div>
          <div>
            <h4>Support</h4>
            <p onClick={placeholderAlert}>Help</p>
            <p onClick={placeholderAlert}>Delivery issues</p>
            <p onClick={placeholderAlert}>Product help</p>
          </div>
          <div>
            <h4>Community</h4>
            <p onClick={placeholderAlert}>Manufacturers</p>
            <p onClick={placeholderAlert}>Designers</p>
            <p onClick={placeholderAlert}>Testimonials</p>
          </div>
        </div>
        <p onClick={placeholderAlert}>© Copyright 2025 - Not a real company LLC</p>
      </div>
    </>
  );
}
