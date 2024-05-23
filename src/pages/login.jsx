import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { setReduxUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";

export default function Login({ setUser }) {
  const navigate = useNavigate(); //for naviagation to other pages after logging in
  const dispatch = useDispatch(); //for redux
  // const [error, setError] = useState("");

  const [email, setEmail] = useState("messi@email.com");
  const [password, setPassword] = useState("barcelona");
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/users/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        toast.success("Login Success!", {
          theme: "dark",
          position: "top-right",
        });
        // setUser(res.data.user.name); props drilling normal setuer function
        dispatch(setReduxUser(res.data.user));
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/");
        // , {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        //   transition: Bounce,
        // });
      })
      .catch((err) => {
        // console.log(err);
        // setError(err.response.data.msg);
        toast.error(err.response.data.msg);
      });
  };
  return (
    <>
      <div className="container">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login
            </h2>
            {/* {error && (
              <div className="mt-10 text-center text-md leading-9 tracking-tight text-gray-900 bg-red-500">
                {error}
              </div>
            )} */}
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-primary hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <Link
                to="/signup"
                className="font-semibold leading-6 text-primary hover:text-indigo-500"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
