import { useNavigate } from "react-router-dom";
import styles from "./productCard.module.css";
import AddRemoveItemBtn from "../addRemoveItemBtn/addRemoveItemBtn";
import getStars from "../../helpers/getStars";

export default function ProductCard({ productData, cart, setCart }) {
  const navigate = useNavigate();

  function openProduct() {
    navigate(`/product/${productData.id}`, { replace: false });
  }
  return (
    <div tabIndex="0">
      <div className={styles.container}>
        <img
          tabIndex="0"
          className={styles.productImg}
          onClick={openProduct}
          src={productData.image}
        />
        <p tabIndex="0" className={styles.title} onClick={openProduct}>
          {productData.title}
        </p>
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
            <p tabIndex="0"
              aria-current={`Price ${productData.price}`}
              className={styles.priceTag}>${productData.price}</p>
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
