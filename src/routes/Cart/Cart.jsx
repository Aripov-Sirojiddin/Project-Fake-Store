import { useOutletContext } from "react-router-dom";
import ProductCard from "../../componets/productCard/productCard";

export default function Cart({}) {
  const { cart, setCart } = useOutletContext();
  const productsView = [];
  let totalPrice = 0;
  for (const productId in cart) {
    const product = cart[productId];
    totalPrice += product.price
    productsView.push(
      <ProductCard
        key={product.id}
        productData={product}
        cart={cart}
        setCart={setCart}
      />
    );
  }

  return <div>{productsView}<p>Total: ${totalPrice}</p></div>;
}
