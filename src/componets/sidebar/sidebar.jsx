import {
  Form,
  useLocation,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import styles from "./sidebar.module.css";
import { useState } from "react";

export default function Sidebar(props) {
  const { category, search } = useRouteLoaderData("store");
  const [minRating, setMinRating] = useState(0);

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
  function setRating(rating) {
    if (minRating === rating) {
      setMinRating(rating - 1);
    } else {
      setMinRating(rating);
    }
  }
  function handleSelectCategory(e) {
    const params = new URLSearchParams(location.search);
    params.set("category", e.target.value);
    submit(params);
  }
  const ratingStars = [1, 2, 3, 4, 5].map((rating) => {
    return (
      <p tabIndex="0" onClick={() => setRating(rating)}>
        {rating <= minRating ? "★" : "☆"}
      </p>
    );
  });
  return (
    <div className={styles.container}>
      <div>
        <Form role="set-preferences">
          <select
            tabIndex="0"
            id="category"
            name="category"
            onChange={handleSelectCategory}
            value={category}
          >
            {options}
          </select>
        </Form>
        <div className={`${styles.rating} ${styles.horizontalContainer}`}>
          {ratingStars}
        </div>
      </div>
    </div>
  );
}
