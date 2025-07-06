import {
  Form,
  useLocation,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import styles from "./navbar.module.css";
import { useEffect } from "react";

export default function Navbar({cart}) {
  const { category, search } = useRouteLoaderData("root");
  const location = useLocation();
  const submit = useSubmit();

  useEffect(() => {
    document.querySelector("#search").value = search;
  }, [search]);

  let searchValue = "";
  function handleSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams(location.search);
    const inputText = searchValue;
    if (inputText !== "") {
      params.set("search", inputText);
    } else {
      params.delete("search");
    }
    submit(params);
  }
  function handleOnChange(e) {
    searchValue = e.target.value;
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
