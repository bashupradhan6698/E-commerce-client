import { CiMail } from "react-icons/ci";
import {
  FaPhoneVolume,
  FaRegUser,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

export default function Header() {
  return (
    <>
      <header className="bg-primary ">
        <nav className="container flex justify-between py-3 items-center">
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
      <header className="sm:bg-primary sm:text-white md:bg-secondary">
        <nav className="container py-5 flex gap-16 items-center">
          <p className="text-4xl font-bold">Hekto</p>

          <div className="flex grow justify-between">
            <ul className="flex gap-9 items-center">
              <li>
                <a href="" className="text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Carts</a>
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
