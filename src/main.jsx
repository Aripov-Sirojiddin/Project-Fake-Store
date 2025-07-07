import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage, {
  loader as productLoader,
} from "./routes/ProductPage/ProductPage.jsx";
import Store, { loader as storeLoader } from "./routes/Store/Store.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
