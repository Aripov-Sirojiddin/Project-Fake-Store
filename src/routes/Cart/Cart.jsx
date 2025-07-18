import ProductCard from "../../componets/productCard/productCard";
import Reciept from "../../componets/reciept/reciept";
import styles from "./Cart.module.css";
import { useContext } from "react";
import { ShopContext } from "../../App";

export default function Cart({}) {
  const { cart, setCart } = useContext(ShopContext);
  const productsView = [];
  let totalPrice = 0;
  for (const productId in cart) {
    const product = cart[productId];
    totalPrice += product.price;
    productsView.push(
      <ProductCard
        key={product.id}
        productData={product}
        cart={cart}
        setCart={setCart}
      />
    );
  }

  return (
    <div className={styles.horizontalContainer}>
      <div className={styles.container}>
        {totalPrice === 0 ? (
          <p>Nothing here but some lint and dust...</p>
        ) : (
          <>
            <h1 style={{ marginBlockStart: "0" }}>Products in Cart</h1>
            <div className={styles.products}>{productsView}</div>
          </>
        )}
      </div>
      <Reciept className={styles.stickyReciept} totalPrice={totalPrice} />
    </div>
  );
}
