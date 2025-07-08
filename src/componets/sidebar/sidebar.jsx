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
  const [maxRating, setMaxRating] = useState(5);

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

  function setRating(rating, currentRating, setRating) {
    const minOrMax = setRating == setMinRating ? "minRating" : "maxRating";
    const params = new URLSearchParams(location.search);

    if (currentRating == rating) {
      setRating(rating - 1);
      params.set(minOrMax, rating - 1);
    } else {
      setRating(rating);
      params.set(minOrMax, rating);
    }
    submit(params);
  }

  function handleSelectCategory(e) {
    const params = new URLSearchParams(location.search);
    params.set("category", e.target.value);
    submit(params);
  }
  const minRatingStars = [1, 2, 3, 4, 5].map((rating) => {
    return (
      <p
        tabIndex="0"
        onClick={() => setRating(rating, minRating, setMinRating)}
      >
        {rating <= minRating ? "★" : "☆"}
      </p>
    );
  });

  const maxRatingStars = [1, 2, 3, 4, 5].map((rating) => {
    return (
      <p
        tabIndex="0"
        onClick={() => setRating(rating, maxRating, setMaxRating)}
      >
        {rating <= maxRating ? "★" : "☆"}
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
        <h3 tabIndex="0">Min Rating</h3>
        <div className={`${styles.rating} ${styles.horizontalContainer}`}>
          {minRatingStars}
        </div>
        <h3 tabIndex="0">Max Rating</h3>
        <div className={`${styles.rating} ${styles.horizontalContainer}`}>
          {maxRatingStars}
        </div>
      </div>
    </div>
  );
}
