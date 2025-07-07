import { Form, useLocation, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { useEffect } from "react";

export default function Navbar({ cart }) {
  const location = useLocation();
  const navigate = useNavigate();

  let itemsInCartCount = 0;
  if (cart) {
    itemsInCartCount = cart.length;
  } else {
    
  }

  let search = "";
  let category = "";
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    document.getElementById("search").value = params.get("search");
    search = params.get("search");
    category = params.get("category");
  }, [location]);

  function handleSearch(e) {
    e.preventDefault();
    const storeParams =
      search.length > 0
        ? `/store/?category=${category ? category.split(" ").join("+") : "all"}&search=${search
            .split(" ")
            .join("+")}`
        : `/store/?category=${category ? category : "all"}`;
    navigate(storeParams, {replace: true});
  }
  function handleOnChange(e) {
    search = e.target.value;
  }
  return (
    <div className={styles.container}>
      <p>Navbar</p>
      <Form role="search" onSubmit={handleSearch}>
        <input
          type="text"
          id="search"
          name="search"
          onChange={handleOnChange}
          placeholder="Looking for something specific?"
        />
      </Form>
      <p>{itemsInCartCount} items in cart</p>
    </div>
  );
}
