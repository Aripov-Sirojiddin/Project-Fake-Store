import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const productData = await fetch(
    `https://fakestoreapi.com/products/${params.productId}`
  )
    .then((response) => {
      if (!response.ok) {
        throw Error(`Failed to retrieve product.\nStatus ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      throw Error(`Failed to retrieve product.\nError: ${error}`);
    });
  return { productData };
}

export default function ProductPage({}) {
  const { productData } = useLoaderData();
  return (
    <>
      <img src={productData.image} />
      <p>{productData.title}</p>
      <p>Rating {productData.rating.rate}</p>
      <p>${productData.price}</p>
    </>
  );
}
