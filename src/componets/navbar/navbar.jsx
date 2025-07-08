import {
  Form,
  Link,
  useLocation,
  useNavigate,
  useSubmit,
} from "react-router-dom";
import styles from "./navbar.module.css";
import { useEffect } from "react";
import bagIcon from "../../../public/bag.svg";

export default function Navbar({ cart }) {
  const location = useLocation();
  const submit = useSubmit();

  let itemsInCartCount = 0;
  if (cart) {
    itemsInCartCount = Object.keys(cart).length;
  }

  let search = "";
  let category = "";
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    document.getElementById("search").value = params.get("search");
    search = params.get("search");
    category = params.get("category");
  }, [location]);

  function handleOnFocus(e) {
    e.target.placeholder = "Looking for something specific?";
  }

  function handleOnBlur(e) {
    e.target.placeholder = "Search...";
  }

  function handleSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams(location.search);
    if (search.length > 0) {
      params.set("search", search.split(" ").join("+"));
    } else {
      params.delete("search");
    }
    submit(params, {action: "/store"});
  }
  function handleOnChange(e) {
    search = e.target.value;
  }
  return (
    <div className={`${styles.container} ${styles.gradientBackground}`}>
      <div className={styles.container}>
        <Link
          to={location.pathname === "/" ? location : "/"}
          className={`${styles.title} ${
            location.pathname === "/" ? styles.selected : ""
          }`}
        >
          <h1>Fake Store</h1>
        </Link>
        <Link
          to={location.pathname === "/store" ? location : "/store"}
          className={location.pathname === "/store" ? styles.selected : ""}
        >
          <h2>Our Products</h2>
        </Link>
      </div>
      <div className={styles.container}>
        <div>
          <Form role="search" onSubmit={handleSearch}>
            <input
              type="text"
              id="search"
              name="search"
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              onChange={handleOnChange}
              placeholder="Search..."
            />
          </Form>
        </div>

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
