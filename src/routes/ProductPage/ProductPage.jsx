import { useLoaderData, useOutletContext } from "react-router-dom";
import styles from "./ProductPage.module.css";
import AddRemoveItemBtn from "../../componets/addRemoveItemBtn/addRemoveItemBtn";

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
  const { cart, setCart } = useOutletContext();
  const { productData } = useLoaderData();

  return (
    <div className={styles.container}>
      <img src={productData.image} className={styles.largeImg} />
      <div>
        <h1>{productData.title}</h1>
        <div className={`${styles.container} ${styles.gap_3rem}`}>
          <p>Rating {productData.rating.rate}</p>
          <p>${productData.price}</p>
        </div>
        <h3>Description</h3>
        <p>{productData.description}</p>
        <AddRemoveItemBtn
          productData={productData}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </div>
  );
}
