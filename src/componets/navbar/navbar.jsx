import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import { useEffect } from "react";
import SearchBar from "../searchBar/searchBar";
import BagIcon from "../bagIcon/bagIcon";

export default function Navbar({ cart }) {
  const location = useLocation();


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
        <SearchBar />
        <BagIcon />
      </div>
    </div>
  );
}
