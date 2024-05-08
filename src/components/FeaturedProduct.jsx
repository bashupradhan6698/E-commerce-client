import Chair from "../assets/images/latestProduct1.png";
import { CiShoppingCart } from "react-icons/ci";

export default function FeaturedProduct() {
  return (
    <>
      <div className="relative rounded-lg bg-white border text-center shadow-xl group hover:bg-primary group hover:border-primary">
        <img src={Chair} alt="" className="bg-white w-full aspect-square p-4" />
        <div className="py-2 px-4">
          <p className="my-3 text-lg text-secondary font-bold group-hover:text-white">
            F.. Chair
          </p>
          <p className="text-primary font-semibold group-hover:text-white">
            $100
          </p>
        </div>
        <span className="hidden absolute top-1 left-1 bg-primary-light p-2 group-hover:inline-block rounded-full ">
          <CiShoppingCart />
        </span>
      </div>
    </>
  );
}
