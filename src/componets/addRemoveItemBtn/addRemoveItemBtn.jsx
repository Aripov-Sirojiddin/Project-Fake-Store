import addIcon from "../../../public/addtobag.svg";
import removeIcon from "../../../public/removefrombag.svg";
import styles from "./addRemoveItemBtn.module.css";

export default function AddRemoveItemBtn({ productData, cart, setCart }) {
  let itemsInCart = JSON.parse(sessionStorage.getItem("incart"));
  itemsInCart = itemsInCart ? itemsInCart : {};
  itemsInCart = Object.keys(itemsInCart).length > 0 ? itemsInCart : {};

  const isInCart = cart ? cart[productData.id] : false;
  function addToCart() {
    itemsInCart = {
      ...itemsInCart,
      [productData.id]: productData,
    };
    sessionStorage.setItem("incart", JSON.stringify(itemsInCart));
    setCart((oldCart) => {
      return { ...oldCart, [productData.id]: productData };
    });
  }
  function removeFromCart() {
    delete itemsInCart[productData.id];
    sessionStorage.setItem("incart", JSON.stringify(itemsInCart));
    setCart((oldCart) => {
      const newCart = {
        ...oldCart,
      };
      delete newCart[productData.id];
      return newCart;
    });
  }
  return (
    <>
      {isInCart ? (
        <img
          tabIndex="0"
          src={removeIcon}
          className={styles.iconSize}
          onClick={removeFromCart}
        />
      ) : (
        <img
          tabIndex="0"
          src={addIcon}
          className={styles.iconSize}
          onClick={addToCart}
        />
      )}
    </>
  );
}
