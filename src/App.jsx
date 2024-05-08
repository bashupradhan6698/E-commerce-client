import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Carts from "./pages/Carts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carts" element={<Carts />} />
      </Routes>
    </>
  );
}

export default App;
