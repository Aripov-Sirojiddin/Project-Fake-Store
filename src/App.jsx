import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./componets/navbar/navbar";
import Sidebar from "./componets/sidebar/sidebar";
import Footer from "./componets/footer/footer";
import { useSubmit } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const submit = useSubmit();

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
        for (let i = 0; i < data.length; i++) {
          if (!categoriesSet.has(data[i].category)) {
            categoriesSet.add(data[i].category);
          }
        }
        const categoriesArray = [...categoriesSet];
        submit(categoriesArray[0]);
        setCategories(categoriesArray);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="main">
        <Sidebar categories={categories} />
        <div className="content">
          <p>Hello</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
