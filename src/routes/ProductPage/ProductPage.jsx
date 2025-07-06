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
      <h1>Description</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </>
  );
}
