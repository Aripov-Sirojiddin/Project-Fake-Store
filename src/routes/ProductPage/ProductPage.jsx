import { useLoaderData, useOutletContext } from "react-router-dom";
import styles from "./ProductPage.module.css";
import AddRemoveItemBtn from "../../componets/addRemoveItemBtn/addRemoveItemBtn";
import getStars from "../../helpers/getStars.js";
import { useContext } from "react";
import { ShopContext } from "../../App.jsx";

export async function loader({ params }) {
  const productData = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  )
    .then((response) => {
      if (!response.ok) {
        throw Error(`Failed to retrieve product.\nStatus ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      throw Error(`Failed to retrieve product.\nError: ${error}`);
    });
  return { productData };
}

export default function ProductPage({}) {
  const { cart, setCart } = useContext(ShopContext);
  const { productData } = useLoaderData();

  return (
    <div className={styles.container}>
      <img src={productData.image} className={styles.largeImg} />
      <div>
        <h1>{productData.title}</h1>
        <div className={`${styles.container} ${styles.ratingPrice}`}>
          <p
            tabIndex="0"
            aria-current={`Rating ${productData.rating.rate}`}
          >
            {productData.rating.rate}
            <span className={styles.stars}>
              {getStars(productData.rating.rate)}
            </span>
          </p>
          <p
            tabIndex="0"
            aria-current={`Price ${productData.price}`}
          >
            ${productData.price}
          </p>
          <AddRemoveItemBtn
            productData={productData}
            cart={cart}
            setCart={setCart}
          />
        </div>
        <h3 tabIndex="0">Description</h3>
        <p tabIndex="0" style={{fontSize: "x-large"}}>{productData.description}</p>
      </div>
    </div>
  );
}
