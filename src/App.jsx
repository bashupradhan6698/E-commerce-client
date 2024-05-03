import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";

import Layout from "./components/index";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
