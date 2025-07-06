import { Form, useLocation, useSubmit } from "react-router-dom";
import styles from "./navbar.module.css";
export default function Navbar({}) {
  const location = useLocation();
  const submit = useSubmit();

  function handleSearch(e) {
    const params = new URLSearchParams(location.search);
    console.log(params);

    const inputText = e.target.value;
    if (inputText !== "") {
      params.set("search", inputText);
    } else {
      params.delete("search");
    }
    
    submit(params);
  }
  return (
    <div className={styles.container}>
      <p>Navbar</p>
      <Form>
        <input
          type="text"
          id="search"
          name="search"
          onChange={handleSearch}
          placeholder="Looking for something specific?"
        />
      </Form>
    </div>
  );
}
