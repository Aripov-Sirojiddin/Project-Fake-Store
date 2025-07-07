import styles from "./App.module.css";
import Navbar from "./componets/navbar/navbar";
import Footer from "./componets/footer/footer";
import {
  Outlet,
} from "react-router-dom";


function App() {
  return (
    <div className={styles.flexContainer}>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
