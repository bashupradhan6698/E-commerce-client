import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa";
import { Todos } from "./components/Todos";

function App() {
  return (
    <>
      <header>
        <div className="flex bg-purple-700 items-center p-2 justify-between">
          <div className="flex gap-4 text-xs">
            <div className="flex text-white">
              <CiMail className="w-4 h-4" />
              <span>email@email.com</span>
            </div>
            <div className="flex text-white">
              <FaPhoneVolume className="w-4 h-4" />
              <span>9861416191</span>
            </div>
          </div>
        </div>
        <div>Hekto</div>
      </header>
      <Todos />
    </>
  );
}

export default App;
