import { useNavigate } from "react-router-dom";
import styles from "./productCard.module.css";
import AddRemoveItemBtn from "../addRemoveItemBtn/addRemoveItemBtn";

export default function ProductCard({ productData, cart, setCart }) {
  const navigate = useNavigate();

  function openProduct() {
    navigate(`/product/${productData.id}`, { replace: false });
  }
  return (
    <div>
      <div className={styles.container}>
        <img
          className={styles.productImg}
          onClick={openProduct}
          src={productData.image}
        />
        <p className={styles.title} onClick={openProduct}>{productData.title}</p>
        <div className={styles.horizontalContainer}>
          <div>
            <p>Rating {productData.rating.rate}</p>
            <p>${productData.price}</p>
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
