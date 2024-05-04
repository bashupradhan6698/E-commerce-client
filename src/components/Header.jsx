import { CiMail } from "react-icons/ci";
import {
  FaPhoneVolume,
  FaRegUser,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
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
            <span>Login</span>
            <FaShoppingCart className="inline" />
          </div>
        </nav>
      </header>
      <header className="">
        <nav className="container flex flex-col py-5 gap-4 items-center md:flex-row lg:gap-8 2xl:gap-16  ">
          <p className="text-4xl font-bold">Hekto</p>

          <div className="flex flex-col gap-4 md:flex-row grow justify-between">
            <ul className="flex gap-9 items-center">
              <li>
                <Link to="/" className="text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-secondary">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/carts" className="hover:text-secondary">
                  Carts
                </Link>
              </li>
            </ul>

            <form className="flex">
              <input className="border-2 border-r-0" type="text" />
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
