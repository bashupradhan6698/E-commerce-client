import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import SingleProduct from "../components/SingleProduct";
const CarouselItem = (props) => {
  return (
    <>
      <div
        className={`${props.banner} h-[50vh]  xl:h-[80vh] bg-cover bg-center flex text-left`}
      >
        {/* <img src={Banner1} alt="" /> */}
        <div className="container">
          <div className="w-1/2 mt-28">
            <p className="text-secondary mb-3">Best Furniture</p>
            <p className="text-5xl font-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-primary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Hicaperiam voluptatibus ab dignissimos illum veritatis tempora
              maxime inventore. Nam doloremque eveniet possimus dolorem cum
              delectus eum voluptatem sed aliquam libero!
            </p>
            <Link
              to="/products"
              className="mt-5 inline-block bg-secondary text-white px-4 py-2 "
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default function Home() {
  // console.log("re-renderrrr");
  const [products, setProducts] = useState([]);
  const [latestProducts, setlatestProducts] = useState([]);
  /*  */
  // let products = [];

  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products/trending")
      .then((res) => {
        setProducts(res.data.data);
      });
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products")
      .then((res) => {
        setlatestProducts(res.data.products);
        // console.log(res.data.products);
      });
  }, []);
  return (
    <>
      <Carousel showThumbs={false} emulateTouch={true}>
        <CarouselItem banner="bg-banner-1" />
        <CarouselItem banner="bg-banner-2" />
        <CarouselItem banner="bg-banner-3" />
      </Carousel>
      <div className="container">
        <section className=" my-28 grid grid-cols-4 gap-4">
          {products.length == 0 && (
            <>
              <Skeleton height={150} />
              <Skeleton height={150} />
              <Skeleton height={150} />
              <Skeleton height={150} />
            </>
          )}
          {products.map((product) => {
            return <SingleProduct product={product} />;
          })}
        </section>

        <p className="text-5xl font-bold text-primary-dark text-center mb-12">
          Latest Product
        </p>
        <section className="grid grid-cols-3 gap-4">
          {latestProducts.length == 0 && (
            <>
              <Skeleton height={150} />
              <Skeleton height={150} />
              <Skeleton height={150} />
              <Skeleton height={150} />
              <Skeleton height={150} />
              <Skeleton height={150} />
            </>
          )}
          {latestProducts.map((latestProduct, index) => {
            //.slice(0,6)
            if (index > 5) {
              return null;
            }
            return <SingleProduct type="latest" product={latestProduct} />;
          })}
        </section>
      </div>
    </>
  );
}
