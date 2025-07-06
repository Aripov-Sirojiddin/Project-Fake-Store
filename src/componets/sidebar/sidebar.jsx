import { Form, useSubmit } from "react-router-dom";
import styles from "./sidebar.module.css";

export default function Sidebar(props) {
  const submit = useSubmit();

  const categories = props.categories
    ? props.categories
    : ["men's clothing", "jewelry", "electronics", "women's clothing"];

  const options = [];

  for (let i = 0; i < categories.length; i++) {
    options.push(
      <option key={categories[i]} value={categories[i]}>
        {categories[i]}
      </option>
    );
  }
  
  function handleSelectCategory(e) {
    submit(e.target.value);
  }
  
  return (
    <div className={styles.container}>
      <div>
        <Form role="set-preferences">
          <select id="category" name="category" onChange={handleSelectCategory}>
            {options}
          </select>
        </Form>
      </div>
    </div>
  );
}
