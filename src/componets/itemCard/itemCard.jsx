import { Link, useNavigate } from "react-router-dom";
import styles from "./itemCard.module.css";
import { useEffect, useState } from "react";

export default function ItemCard({ itemProperties, cart, setCart }) {
  const navigate = useNavigate();

  let sessionData = sessionStorage.getItem("incart");
  sessionData = sessionData ? sessionData.split(",") : [];

  const isInCart =
    sessionData.includes(`${itemProperties.id}`) ||
    cart.includes(itemProperties.id);

  function addToCart() {
    sessionData.push(itemProperties.id);
    sessionStorage.setItem("incart", sessionData.join(","));
    setCart((oldCart) => {
      const newCart = [...oldCart];
      newCart.push(itemProperties.id);
      return newCart;
    });
  }
  function removeFromCart() {
    sessionData = sessionData.filter((id) => {
      return id != itemProperties.id;
    });
    sessionStorage.setItem("incart", sessionData.join(","));
    setCart((oldCart) => {
      const newCart = oldCart.filter(
        (productInCart) => productInCart != itemProperties.id
      );
      return newCart;
    });
  }
  function openProduct() {
    navigate(`product/${itemProperties.id}`, { cart: cart });
  }
  return (
    <div>
      <div onClick={openProduct} className={styles.container}>
        <img src={itemProperties.image} />
        <p>{itemProperties.title}</p>
        <p>Rating {itemProperties.rating.rate}</p>
        <p>${itemProperties.price}</p>
      </div>
      {isInCart ? (
        <button onClick={removeFromCart}>Remove from cart</button>
      ) : (
        <button onClick={addToCart}>Add to cart</button>
      )}
    </div>
  );
}
