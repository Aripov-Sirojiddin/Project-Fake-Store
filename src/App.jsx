import { useState } from "react";
import "./App.css";
import Navbar from "./componets/navbar/navbar";
import Sidebar from "./componets/sidebar/sidebar";
import Footer from "./componets/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Sidebar/>
        <div className="content">
          <p>Hello</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
