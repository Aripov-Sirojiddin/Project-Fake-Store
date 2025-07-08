import styles from "./reciept.module.css";

export default function Reciept({ className, totalPrice }) {
  return (
    <div className={`${className} ${styles.container}`}>
      <h2 style={{textAlign: "center"}}>Cart Overview</h2>
      <div className={styles.horizontalContainer}>
        <p>Products total </p> <p>${totalPrice}</p>
      </div>
      <div className={styles.horizontalContainer}>
        <p>Tax (6% sales tax) </p> <p> +${(totalPrice*0.06).toFixed(2)}</p>
      </div>
      <div className={styles.horizontalContainer}>
        <p>Shipping </p> <p>$10.99</p>
      </div>
      <div className={styles.horizontalContainer}>
        <p>Estimated delivery </p> <p>2-3 weeks</p>
      </div>
      <hr />
      <div className={styles.horizontalContainer}>
        <h3>Total </h3> <p>${(totalPrice*1.06+10.99).toFixed(2)}</p>
      </div>
      <button className={styles.button}>Place Order</button>
    </div>
  );
}
