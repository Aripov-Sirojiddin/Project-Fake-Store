import { Form, useLocation, useSubmit } from "react-router-dom";
import styles from "./searchBar.module.css";
import { useEffect } from "react";

export default function SearchBar({}) {
  const location = useLocation();
  const submit = useSubmit();
  let search = "";

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    search = params.get("search");
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
    submit(params, { action: "/store" });
  }
  function handleOnChange(e) {
    search = e.target.value;
  }
  return (
    <div className={styles.container}>
      <Form role="search" onSubmit={handleSearch}>
        <input
          type="text"
          style={{
            visibility: `${location.pathname == "/" ? "collapse" : ""}`,
          }}
          id="search"
          name="search"
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          placeholder="Search..."
        />
      </Form>
    </div>
  );
}
