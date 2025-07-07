import { useOutletContext } from "react-router-dom";
import ProductCard from "../../componets/productCard/productCard";
import { useEffect, useState } from "react";

export default function Cart({}) {
  const { cart, setCart } = useOutletContext();
  const { products, setProducts } = useState([]);

  useEffect(() => {
    
  }, []);

  const productsView = products

  return <div>{productsView}</div>;
}
