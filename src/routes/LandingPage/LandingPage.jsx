import ProductCard from "../../componets/productCard/productCard";
import styles from "./LandingPage.module.css";

export default function LandingPage({}) {
  let history = sessionStorage.getItem("history");
  history = history ? JSON.parse(history) : { products: [] };

  const productsView = [];
  for (let i = 0; i < history.products.length; i++) {
    console.log(history.products[i]);
    productsView.push(
      <ProductCard
        key={history.products[i].id}
        productData={history.products[i]}
      />
    );
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1 tabIndex="0">Be the reason for someone's smile!</h1>
        </div>
      </div>
      <div className={styles.content}>
        <h1 tabIndex="0">Previously Viewed Products</h1>
        {productsView.length > 0 ? (
          <div className={styles.horizontalContainer}>{productsView}</div>
        ): (
          <p tabIndex="0">You haven't looked at any of our AWESOME products yet!</p>
        )}
      </div>
    </>
  );
}
