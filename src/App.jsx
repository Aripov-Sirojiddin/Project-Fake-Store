import styles from "./App.module.css";
import Navbar from "./componets/navbar/navbar";
import Footer from "./componets/footer/footer";
import { Outlet } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext({
  cart: {},
  setCart: () => {},
  products: [],
  setProducts: () => {},
});

function App() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState({});

  useEffect(() => {
    // Set main offset to account for the area under the navbar;
    const navbar = document.getElementById("navbar");
    const content = document.getElementById("content");
    content.style.marginBlockStart = `${navbar.offsetHeight}px`;
    //get saved items in cart
    const savedCart = JSON.parse(sessionStorage.getItem("incart"));
    setCart(savedCart);
  }, []);

  return (
    <ShopContext.Provider value={{ cart, setCart, products, setProducts }}>
      <div className={styles.flexContainer}>
        <Navbar />
        <div id="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ShopContext.Provider>
  );
}

export default App;
