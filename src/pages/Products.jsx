import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import SingleProduct from "../components/SingleProduct";
import { useLocation, useNavigate } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  let params = useLocation();
  console.log(params);

  useEffect(() => {
    axios
      .get(
        "https://ecommerce-sagartmg2.vercel.app/api/products" + params.search
      )
      .then((res) => {
        setProducts(res.data.products);
        // console.log(res.data.products);
      });
  }, [params.search]);

  return (
    <>
      {/* Bread Crumbs */}
      <section className="h-48 bg-primary-light flex items-center">
        <div className="container">
          <p className="text-3xl font-bold">Product title</p>
          <p className="text-xl mt-4">Home/Product</p>
        </div>
      </section>

      <section className="container mt-16">
        <div className="mb-16 flex items-center justify-between">
          <div>
            <p className="text-primary-dark 3xl font-bold">
              Ecommerce Accessories and Items
            </p>
            <p>25 out of 50</p>
          </div>
          <div className="flex gap-2">
            <label>Per Page: </label>
            <select
              name=""
              id=""
              onChange={(e) => {
                navigate("/products?per_page=" + e.target.value);
              }}
            >
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <label>Sort by</label>
            <select
              name=""
              id=""
              onChange={(e) => {
                navigate("/products?sort=" + e.target.value);
              }}
            >
              <option value="datedesc">latest</option>
              <option value="pricedesc">price desc</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          <div className="border">filter</div>
          <div className="border grid-cols-1 lg:col-span-3 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {products.length == 0 && (
              <>
                <Skeleton height={150} />
                <Skeleton height={150} />
                <Skeleton height={150} />
                <Skeleton height={150} />
                <Skeleton height={150} />
                <Skeleton height={150} />
                <Skeleton height={150} />
                <Skeleton height={150} />
              </>
            )}
            {products.map((el) => {
              return <SingleProduct product={el} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
