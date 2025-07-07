import {
  Form,
  useLocation,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import styles from "./sidebar.module.css";

export default function Sidebar(props) {
  const { category, search } = useRouteLoaderData("store");
  const submit = useSubmit();
  const location = useLocation();

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
    const params = new URLSearchParams(location.search);
    params.set("category", e.target.value);

    submit(params);
  }
  return (
    <div className={styles.container}>
      <div>
        <Form role="set-preferences">
          <select
            id="category"
            name="category"
            onChange={handleSelectCategory}
            value={category}
          >
            {options}
          </select>
        </Form>
      </div>
    </div>
  );
}
