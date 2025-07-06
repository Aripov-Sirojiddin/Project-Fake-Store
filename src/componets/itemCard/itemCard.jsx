import styles from "./itemCard.module.css";

export default function ItemCard({ itemProperties }) {
  return (
    <div className={styles.container}>
      <img src={itemProperties.image} />
      <p>{itemProperties.title}</p>
      <p>Rating {itemProperties.rating.rate}</p>
      <p>${itemProperties.price}</p>
    </div>
  );
}
