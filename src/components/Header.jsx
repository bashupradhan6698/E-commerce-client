import { CiMail } from "react-icons/ci";
import {
  FaPhoneVolume,
  FaRegUser,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <>
      <header className="bg-primary ">
        <nav className="container flex flex-col sm:flex-row justify-between py-3 items-center">
          <div className="flex items-center gap-2">
            <CiMail className="inline" />
            <span>email@email.com</span>
            <FaPhoneVolume className="inline" />
            <span>9861416191</span>
          </div>
          <div className=" flex items-center gap-2">
            <FaRegUser className="inline" />
            <Link to="/login">Login</Link>
            <FaShoppingCart className="inline" />
          </div>
        </nav>
      </header>
      <header className="">
        <nav className="container flex flex-col py-5 gap-4 items-center md:flex-row lg:gap-8 2xl:gap-16  ">
          <Link path to="/" className="text-4xl font-bold text-primary-dark">
            Hekto
          </Link>

          <div className="flex flex-col gap-4 md:flex-row grow justify-between">
            <ul className="flex gap-9 items-center">
              <li>
                <Link
                  to="/"
                  className={`${
                    pathname == "/" ? "text-secondary" : ""
                  } hover:text-secondary`}
                >
                  Home
                </Link>
              </li>
              <li>
                {/* url==="/products" tecxt-secondary */}
                <Link
                  to="/products"
                  className={`${
                    pathname == "/products" ? "text-secondary" : ""
                  } hover:text-secondary`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/carts"
                  className={`${
                    pathname == "/carts" ? "text-secondary" : ""
                  } hover:text-secondary`}
                >
                  Carts
                </Link>
              </li>
            </ul>

            <form className="flex">
              <input
                className="border-2 border-r-0 px-2 focus:border-secondary"
                type="text"
              />
              <button className="bg-secondary text-white p-3">
                <FaSearch />
              </button>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
}
