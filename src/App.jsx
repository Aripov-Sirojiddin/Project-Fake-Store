import styles from "./App.module.css";
import Navbar from "./componets/navbar/navbar";
import Footer from "./componets/footer/footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState({});
  useEffect(()=>{
    const savedCart = JSON.parse(sessionStorage.getItem("incart"));
    setCart(savedCart);
  },[])
  return (
    <div className={styles.flexContainer}>
      <Navbar cart={cart} />
      
      <Outlet context={{cart, setCart}} />
      <Footer />
    </div>
  );
}

export default App;
