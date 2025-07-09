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
  const { category, search, minRating, maxRating, minPrice, maxPrice } =
    useRouteLoaderData("store");
  const [myMinRating, setMinRating] = useState(minRating ? minRating : 0);
  const [myMaxRating, setMaxRating] = useState(maxRating ? maxRating : 5);
  const [priceRange, setPriceRange] = useState([
    minPrice ? minPrice : 0,
    maxPrice ? maxPrice : 1000,
  ]);

  const submit = useSubmit();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (!params) {
      return;
    }
    if (params.get("minRating")) {
      setMinRating(params.get("minRating"));
    } else {
      setMinRating(0);
    }
    if (params.get("maxRating")) {
      setMaxRating(params.get("maxRating"));
    } else {
      setMaxRating(5);
    }
    const newPriceRange = [0, 1000];
    if (params.get("minPrice")) {
      newPriceRange[0] = params.get("minPrice");
    }
    if (params.get("maxPrice")) {
      newPriceRange[1] = params.get("maxPrice");
    }
    setPriceRange(newPriceRange);
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
    setPriceRange(e);
  }

  function updateLink() {
    const params = new URLSearchParams(location.search);
    params.set("minPrice", priceRange[0]);
    params.set("maxPrice", priceRange[1]);
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
    <div
      id="filters"
      className={styles.container}
    >
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
          <p className={styles.smaller}>
            From ${priceRange[0]} to ${priceRange[1]}
          </p>
        </div>
        <RangeSlider
          className={styles.rangeSlider}
          min={0}
          max={1000}
          step={1}
          value={priceRange}
          defaultValue={[0, 1000]}
          onInput={handleSelectPriceRange}
          onThumbDragEnd={updateLink}
        />
      </div>
    </div>
  );
}
