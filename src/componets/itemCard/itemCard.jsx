import { Link } from "react-router-dom";
import styles from "./itemCard.module.css";

export default function ItemCard({ itemProperties }) {
  return (
    <Link to={`product/${itemProperties.id}`} className={styles.container}>
      <img src={itemProperties.image} />
      <p>{itemProperties.title}</p>
      <p>Rating {itemProperties.rating.rate}</p>
      <p>${itemProperties.price}</p>
    </Link>
  );
}
