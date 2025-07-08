import { Link, useOutletContext } from "react-router-dom";
import styles from "./reciept.module.css";

export default function Reciept({ className, totalPrice }) {
  const { cart, setCart } = useOutletContext();
  function handlePlaceOrder() {
    setCart({});
    sessionStorage.removeItem("incart");
  }
  return (
    <div className={`${className} ${styles.container}`}>
      {totalPrice > 0 ? (
        <>
          <h2 style={{ textAlign: "center" }}>Price Overview</h2>
          <div className={styles.horizontalContainer}>
            <p>Products total </p> <p>${totalPrice}</p>
          </div>
          <div className={styles.horizontalContainer}>
            <p>Tax (6% sales tax) </p>{" "}
            <p> +${(totalPrice * 0.06).toFixed(2)}</p>
          </div>
          <div className={styles.horizontalContainer}>
            <p>Shipping </p> <p>$10.99</p>
          </div>
          <div className={styles.horizontalContainer}>
            <p>Estimated delivery </p> <p>2-3 weeks</p>
          </div>
          <hr />
          <div className={styles.horizontalContainer}>
            <h3>Total </h3> <p>${(totalPrice * 1.06 + 10.99).toFixed(2)}</p>
          </div>
          <button className={styles.button} onClick={handlePlaceOrder}>Place Order</button>
        </>
      ) : (
        <>
          <h2 style={{ textAlign: "center" }}>Cart Overview</h2>
          <p>No items in cart!</p>
          <Link to="/store">
            <button className={styles.button}>Check out products</button>
          </Link>
        </>
      )}
    </div>
  );
}
