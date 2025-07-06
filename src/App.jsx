import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Navbar from "./componets/navbar/navbar";
import Sidebar from "./componets/sidebar/sidebar";
import Footer from "./componets/footer/footer";
import { useLoaderData, useLocation, useSubmit } from "react-router-dom";
import ItemCard from "./componets/itemCard/itemCard";
import fitsProductConstraints from "./helpers/fitsProductConstraints";

export async function loader({ request }) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const search = url.searchParams.get("search");
  return { category, search };
}

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  let sessionCart = sessionStorage.getItem("incart");
  sessionCart = sessionCart ? sessionCart.split(",") : [];
  const [cart, setCart] = useState(sessionCart);

  const submit = useSubmit();
  const location = useLocation();

  const { category, search } = useLoaderData();

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
        submit(params);
        setCategories(categoriesArray);
      });
  }, []);

  const filteredProducts = [];
  for (let i = 0; i < products.length; i++) {
    const productFilter = fitsProductConstraints(products[i]);

    if (
      (category === "all" || productFilter.fitsCategory(category)) &&
      productFilter.fitsSearch(search)
    ) {
      filteredProducts.push(
        <ItemCard
          key={products[i].id}
          itemProperties={products[i]}
          cart={cart}
          setCart={setCart}
        />
      );
    }
  }

  return (
    <div className={styles.flexContainer}>
      <Navbar search={search}/>
      <div className={styles.main}>
        <Sidebar categories={categories} />
        <div className={styles.content}>
          {filteredProducts.length > 0 ? (
            filteredProducts
          ) : (
            <p>
              No products found with words {search} in the {category} category.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
