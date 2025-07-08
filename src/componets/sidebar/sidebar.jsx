import {
  Form,
  useLocation,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import styles from "./sidebar.module.css";
import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

export default function Sidebar(props) {
  const { category, search, minRating, maxRating } =
    useRouteLoaderData("store");
  const [myMinRating, setMinRating] = useState(minRating ? minRating : 0);
  const [myMaxRating, setMaxRating] = useState(maxRating ? maxRating : 5);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const submit = useSubmit();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params && params.get("minRating")) {
      setMinRating(params.get("minRating"));
    } else {
      setMinRating(0);
    }
    if (params && params.get("maxRating")) {
      setMaxRating(params.get("maxRating"));
    } else {
      setMaxRating(5);
    }
  }, [location]);
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

  function handleSelectPriceRange(e) {
    const params = new URLSearchParams(location.search);
    params.set("minPrice", e[0]);
    params.set("maxPrice", e[1]);
    setPriceRange(e);
    submit(params);
  }
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

  const myMinRatingStars = [1, 2, 3, 4, 5].map((rating) => {
    return (
      <p
        key={`min-${rating}`}
        tabIndex="0"
        onClick={() => setRating(rating, myMinRating, setMinRating)}
      >
        {rating <= myMinRating ? "★" : "☆"}
      </p>
    );
  });

  const myMaxRatingStars = [1, 2, 3, 4, 5].map((rating) => {
    return (
      <p
        key={`max-${rating}`}
        tabIndex="0"
        onClick={() => setRating(rating, myMaxRating, setMaxRating)}
      >
        {rating <= myMaxRating ? "★" : "☆"}
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
          {myMinRatingStars}
        </div>
        <h3 tabIndex="0">Max Rating</h3>
        <div className={`${styles.rating} ${styles.horizontalContainer}`}>
          {myMaxRatingStars}
        </div>

        <h3 tabIndex="0">Price Range</h3>
        <div className={styles.horizontalContainer}>
          <p className={styles.smaller}>${priceRange[0]}</p>
          <RangeSlider
            className={styles.rangeSlider}
            min={0}
            max={1000}
            step={1}
            defaultValue={[0, 1000]}
            onInput={handleSelectPriceRange}
          />
          <p className={styles.smaller}>${priceRange[1]}</p>
        </div>
      </div>
    </div>
  );
}
