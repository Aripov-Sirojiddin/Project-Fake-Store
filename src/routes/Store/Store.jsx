import styles from "./Store.module.css";
import Sidebar from "../../componets/sidebar/sidebar.jsx";
import fitsProductConstraints from "../../helpers/fitsProductConstraints.js";
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation, useSubmit } from "react-router-dom";
import ProductCard from "../../componets/productCard/productCard.jsx";
import { ShopContext } from "../../App.jsx";

export async function loader({ request }) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const search = url.searchParams.get("search");
  const minRating = url.searchParams.get("minRating");
  const maxRating = url.searchParams.get("maxRating");
  const minPrice = url.searchParams.get("minPrice");
  const maxPrice = url.searchParams.get("maxPrice");
  return { category, search, minRating, maxRating, minPrice, maxPrice };
}

export default function Store() {
  const { cart, setCart, products, setProducts } = useContext(ShopContext);
  const [categories, setCategories] = useState([]);

  const submit = useSubmit();
  const location = useLocation();
  const { category, search, minRating, maxRating, minPrice, maxPrice } =
    useLoaderData();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => {
        if (!result.ok) {
          throw Error(
            `Error has occured when pulling from API: ${result.status}`
          );
        }
        return result.json();
      })
      .then((data) => {
        setProducts(data);
        const categoriesSet = new Set([]);
        categoriesSet.add("all");
        for (let i = 0; i < data.length; i++) {
          if (!categoriesSet.has("category")) {
            categoriesSet.add(data[i].category);
          }
        }
        const categoriesArray = [...categoriesSet];

        const params = new URLSearchParams(location.search);
        if (!params.has("category")) {
          params.set("category", categoriesArray[0]);
        }
        submit(params, { replace: true });
        setCategories(categoriesArray);
      });
  }, []);

  const filteredProducts = [];
  for (let i = 0; i < products.length; i++) {
    const productFilter = fitsProductConstraints(products[i]);

    if (
      (category === "all" || productFilter.fitsCategory(category)) &&
      productFilter.fitsSearch(search) &&
      productFilter.fitsRating(minRating, maxRating) &&
      productFilter.fitsPriceRange(minPrice, maxPrice)
    ) {
      filteredProducts.push(
        <ProductCard key={products[i].id} productData={products[i]} />
      );
    }
  }

  return (
    <div className={styles.main}>
      <Sidebar categories={categories} />
      <div className={styles.content}>
        {filteredProducts.length > 0 ? (
          filteredProducts
        ) : products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <p tabIndex="0">
            No products found. Try adjusting your filters/product
            specifications.
          </p>
        )}
      </div>
    </div>
  );
}
