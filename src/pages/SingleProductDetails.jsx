import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState("");

  /* set up usestate
  set up useEffect for api call 
  */
  useEffect(() => {
    axios
      .get("https://ecommerce-sagartmg2.vercel.app/api/products/" + id)
      .then((res) => {
        setProduct(res.data.data);
        console.log(product);
      });
  }, []);
  return (
    <>
      <div className="container">{product.name}</div>
    </>
  );
}
