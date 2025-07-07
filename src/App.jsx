import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./componets/navbar/navbar";
import Footer from "./componets/footer/footer";
import {
  Outlet,
  useLoaderData,
} from "react-router-dom";

export async function loader({ request }) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  return { search };
}

function App() {
  const { search } = useLoaderData();

  return (
    <div className={styles.flexContainer}>
      <Navbar />
      <Outlet search={search}/>
      <Footer />
    </div>
  );
}

export default App;
