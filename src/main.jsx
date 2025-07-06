import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { loader as appLoader } from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage, {
  loader as productLoader,
} from "./routes/ProductPage/ProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "root",
    loader: appLoader,
  },
  {
    path: "product/:productId",
    element: <ProductPage />,
    loader: productLoader,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
