import { CiMail } from "react-icons/ci";
import {
  FaPhoneVolume,
  FaRegUser,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setReduxUser, logoutReduxUser } from "../redux/userSlice";

export default function Header({ user }) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const reduxUser = useSelector((reduxStore) => {
    return reduxStore.user.value;
  });
  const navigate = useNavigate();

  const handlelogout = () => {
    dispatch(logoutReduxUser());
    navigate("/login");
  };
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
            {reduxUser?.name && <span>user : {reduxUser.name}</span>}
            {reduxUser ? (
              <button onClick={handlelogout}>Logout</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
            <FaRegUser className="inline" />
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
                {/* url==="/products" tecxt-secondary */}
                <Link
                  to="/products/create"
                  className={`${
                    pathname == "/products/create" ? "text-secondary" : ""
                  } hover:text-secondary`}
                >
                  Create Products
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

            <form
              className="flex"
              onSubmit={(event) => {
                event.preventDefault();
                // console.log(event.target.search_term.value);
                navigate(
                  `/products?search_term=${event.target.search_term.value}`
                );
              }}
            >
              <input
                name="search_term"
                className="border-2 border-r-0 px-2 focus:border-secondary"
                type="search"
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
