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
import axios from "axios";
import { setReduxUser } from "./redux/userSlice";
import { useDispatch } from "react-redux";
import SingleProductDetails from "./pages/SingleProductDetails";
import CreateProduct from "./pages/CreateProduct";

function App() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  let access_token = localStorage.getItem("access_token");
  if (access_token) {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        dispatch(setReduxUser(res.data));
      });
  }

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/products">
          <Route path="" element={<Products />} />
          <Route path="create" element={<CreateProduct />} />
          <Route path=":id" element={<SingleProductDetails />} />
        </Route>
        <Route path="/carts" element={<Carts />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
