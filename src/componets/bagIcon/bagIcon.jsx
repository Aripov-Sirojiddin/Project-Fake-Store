import styles from "./bagIcon.module.css"
import { useContext } from "react";
import { ShopContext } from "../../App";
import bagSvg from "../../../public/bag.svg";
import { Link } from "react-router-dom";

export default function BagIcon({}) {
  const { cart } = useContext(ShopContext);

  let itemsInCartCount = 0;
  if (cart) {
    itemsInCartCount = Object.keys(cart).length;
  }
  return (
    <Link
      to={location.pathname === "/cart" ? location : "/cart"}
      className={styles.bagIconDiv}
    >
      <div>
        <p
          className={`${styles.itemCount} ${
            itemsInCartCount === 0 ? styles.itemCountZero : ""
          }`}
        >
          {itemsInCartCount}
        </p>
        <img
          src={bagSvg}
          className={styles.bagIcon}
          alt="image icon of a bag"
        />
      </div>
    </Link>
  );
}
