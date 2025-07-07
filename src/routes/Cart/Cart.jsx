import { useOutletContext } from "react-router-dom";
import ProductCard from "../../componets/productCard/productCard";
import { useEffect, useState } from "react";

export default function Cart({}) {
  const { cart, setCart } = useOutletContext();
  const productsView = [];
  for (const productId in cart) {
    const product = cart[productId];
    productsView.push(
      <ProductCard
        key={product.id}
        productData={product}
        cart={cart}
        setCart={setCart}
      />
    );
  }

  return <div>{productsView}</div>;
}
