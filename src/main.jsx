import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage, {
  loader as productLoader,
} from "./routes/ProductPage/ProductPage.jsx";
import Store, { loader as storeLoader } from "./routes/Store/Store.jsx";
import LandingPage from "./routes/LandingPage/LandingPage.jsx";
import Cart from "./routes/Cart/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/store",
        element: <Store />,
        id: "store",
        loader: storeLoader,
      },
      {
        path: "/product/:productId",
        element: <ProductPage />,
        loader: productLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const focusedElement = document.activeElement;
    if (focusedElement) {
      event.preventDefault();
      focusedElement.click();
    }
  }
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
