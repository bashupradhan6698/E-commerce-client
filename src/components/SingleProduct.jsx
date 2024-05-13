import Chair from "../assets/images/latestProduct1.png";
import { CiShoppingCart } from "react-icons/ci";
import ImageNotFound from "../assets/images/imgnotfound.png";
import { toast } from "react-toastify";

export default function SingleProduct({ type, product }) {
  function addtoToCart() {
    toast.error("Login required");
  }
  return (
    <>
      <div className="relative bg-white border text-center shadow-xl group hover:bg-primary group hover:border-primary">
        <img
          // src={`${product.image ? product.image : ImageNotFound}`}
          src={product.image || ImageNotFound}
          alt={product.name}
          className={`bg-white w-full object-contain h-60 py-4`}
        />
        <div
          className={`py-2 px-4 
          ${type == "latest" ? "flex items-center justify-between" : ""} `}
        >
          <p className="my-3 tsxt-lg text-secondary font-bold group-hover:text-white">
            {product.name}
          </p>
          <p className="text-primary font-semibold group-hover:text-white">
            {product.price}
          </p>
        </div>
        <span
          onClick={addtoToCart}
          className="hidden absolute top-1 left-1 bg-primary-light p-2 group-hover:inline-block rounded-full "
        >
          <CiShoppingCart />
        </span>
      </div>
    </>
  );
}
