import { Form, Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import { useEffect } from "react";
import bagIcon from "../../../public/bag.svg";
import SearchBar from "../searchBar/searchBar";

export default function Navbar({ cart }) {
  const location = useLocation();

  let itemsInCartCount = 0;
  if (cart) {
    itemsInCartCount = Object.keys(cart).length;
  }

  let category = "";
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    category = params.get("category");
  }, [location]);

  return (
    <div
      id="navbar"
      className={`${styles.sticky} ${styles.container} ${styles.gradientBackground}`}
    >
      <div className={styles.container}>
        <Link to={"/"} className={styles.title}>
          <h1>Fake Store</h1>
        </Link>
        <Link to={location.pathname === "/store" ? location : "/store"}>
          <h2>Our Products</h2>
        </Link>
      </div>
      <div className={styles.container}>
        {location.pathname !== "/" && <SearchBar />}
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
              src={bagIcon}
              className={styles.bagIcon}
              alt="image icon of a bag"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
