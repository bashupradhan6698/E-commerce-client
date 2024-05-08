import Chair from "../assets/images/latestProduct1.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import FeaturedProduct from "../components/FeaturedProduct";

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
  return (
    <>
      <section className="">
        <Carousel showThumbs={false} emulateTouch={true}>
          <CarouselItem banner="bg-banner-1" />
          <CarouselItem banner="bg-banner-2" />
          <CarouselItem banner="bg-banner-3" />
        </Carousel>
      </section>
      <section className="container my-28 grid grid-cols-4 gap-4">
        <FeaturedProduct />
        <FeaturedProduct />
        <FeaturedProduct />
        <FeaturedProduct />
      </section>
    </>
  );
}
