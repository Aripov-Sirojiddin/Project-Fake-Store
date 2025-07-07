import {
  Form,
  useLocation,
  useNavigate,
} from "react-router-dom";
import styles from "./navbar.module.css";
import { useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  let cart = sessionStorage.getItem("incart");
  cart = cart ? cart.split(",") : [];

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
        ? `/store/?category=${
            category ? category : "all"
          }&search=${search.split(" ").join("+")}`
        : `/store/?category=${category ? category : "all"}`;
    navigate(storeParams);
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
      <p>{cart.length} items in cart</p>
    </div>
  );
}
