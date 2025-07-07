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
      <div onClick={openProduct} className={styles.container}>
        <img src={productData.image} />
        <p>{productData.title}</p>
        <p>Rating {productData.rating.rate}</p>
        <p>${productData.price}</p>
      </div>
      <AddRemoveItemBtn
        productData={productData}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}
