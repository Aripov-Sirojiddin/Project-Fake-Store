import { Link } from "react-router-dom";
import styles from "./productCard.module.css";
import AddRemoveItemBtn from "../addRemoveItemBtn/addRemoveItemBtn";
import getStars from "../../helpers/getStars";
import { useContext } from "react";
import { ShopContext } from "../../App";

export default function ProductCard({ productData }) {
  const { cart, setCart } = useContext(ShopContext);

  return (
    <div tabIndex="0">
      <div className={styles.container}>
        <Link to={`/product/${productData.id}`}>
          <img
            tabIndex="0"
            className={styles.productImg}
            src={productData.image}
          />
          <p tabIndex="0" className={styles.title}>
            {productData.title}
          </p>
        </Link>
        <div className={styles.horizontalContainer}>
          <div>
            <p
              tabIndex="0"
              aria-current={`Rating ${productData.rating.rate}`}
              className={`${styles.horizontalContainer} ${styles.rating}`}
            >
              {productData.rating.rate}
              <span className={styles.stars}>
                {getStars(productData.rating.rate)}
              </span>
            </p>
            <p
              tabIndex="0"
              aria-current={`Price ${productData.price}`}
              className={styles.priceTag}
            >
              ${productData.price}
            </p>
          </div>
          <AddRemoveItemBtn
            productData={productData}
            cart={cart}
            setCart={setCart}
          />
        </div>
      </div>
    </div>
  );
}
