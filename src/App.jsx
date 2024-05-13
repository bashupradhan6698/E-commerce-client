import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Carts from "./pages/Carts";
import Login from "./pages/login";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
