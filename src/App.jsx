import styles from "./App.module.css";
import Navbar from "./componets/navbar/navbar";
import Footer from "./componets/footer/footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    // Set main offset to account for the area under the navbar;
    const navbar = document.getElementById("navbar");
    const content = document.getElementById("content");
    const filters = document.getElementById("filters");
    const receipt = document.getElementById("receipt");

    content.style.marginBlockStart = `${navbar.offsetHeight}px`;
    filters != null ? filters.style.paddingBlockStart = `${navbar.offsetHeight*1.5}px` : undefined;

    //get saved items in cart
    const savedCart = JSON.parse(sessionStorage.getItem("incart"));
    setCart(savedCart);
  }, []);
  return (
    <div className={styles.flexContainer}>
      <Navbar cart={cart} />
      <div id="content">
        <Outlet context={{ cart, setCart }} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
