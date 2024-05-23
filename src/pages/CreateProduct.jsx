import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";

export default function CreateProduct() {
  const [error, setError] = useState({});

  let initialState = {
    name: "",
    price: "",
    description: "",
    stock: "",
    category: [""],
    images: [],
  };
  const [data, setData] = useState(initialState);

  function handleSubmit(event) {
    setError({});
    event.preventDefault();

    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    data.category.forEach((cat) => {
      formData.append("category[]", cat);
    });
    formData.append("description", data.description);

    let temp = [...data.images];
    temp.forEach((img) => {
      formData.append("images[]", img);
    });

    axios
      .post("https://ecommerce-sagartmg2.vercel.app/api/products", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        toast.success("Product created successfully!", {
          theme: "dark",
          position: "top-right",
        });
        setData(initialState);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          let errors = err.response.data.errors;
          let temp = {};
          errors.forEach((validationError) => {
            temp[validationError.param] = validationError.msg;
          });
          toast.error("Bad Request / check all form data");
          setError(temp);
        } else {
          toast.error("Something went wrong...");
        }
      });
  }

  const addCategory = () => {
    let temp = [...data.category];
    temp.push("");
    setData({ ...data, category: temp });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };
  return (
    <>
      <div className="container mt-8">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <div>
              <label className="form-label" for="name">
                Name
              </label>
              <input
                className="form-control"
                name="name"
                value={data.name}
                type="text"
                placeholder=""
                onChange={handleChange}
              />
              <small className="text-red-500">{error.name}</small>
            </div>

            <label className="form-label" for="name">
              Price
            </label>
            <input
              onChange={handleChange}
              className="form-control"
              type="number"
              placeholder=""
              name="price"
              value={data.price}
            />
            <small className="text-red-500">{error.price}</small>

            <label className="form-label" for="name">
              Description
            </label>
            <input
              onChange={handleChange}
              className="form-control"
              value={data.description}
              name="description"
              type="text"
              placeholder=""
            />
            <label className="form-label" for="name">
              Category
              <button type="button" className="btn ml-4" onClick={addCategory}>
                Add category
              </button>
            </label>
            {data.category.map((cat, index) => {
              return (
                <div className="flex mb-3">
                  <input
                    onChange={(e) => {
                      let temp = [...data.category];
                      temp[index] = e.target.value;
                      setData({ ...data, category: temp });
                    }}
                    className="form-control"
                    value={cat}
                    name="category"
                    type="text"
                    placeholder=""
                  />
                  <button
                    type="button"
                    className="btn bg-red-500"
                    onClick={(e, index) => {
                      let temp = [...data.category];
                      temp.splice(index, 1);
                      setData({ ...data, category: temp });
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
            <label className="form-label" for="name">
              Images
            </label>
            <input
              onChange={(event) => {
                setData({ ...data, images: event.target.files });
              }}
              className="form-control"
              name="images"
              type="file"
              placeholder=""
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
