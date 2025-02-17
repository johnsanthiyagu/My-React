import React from "react";
import { useState, useEffect } from "react";

const API_URL = "https://fakestoreapi.com/products";
const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  let addToCart = () => {
    setCartCount(cartCount + 1, item.id);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error:{error.message}</p>;
  console.log(data);
  return (
    <>
      <header className="flex justify-between items-center relative">
        <nav className="flex justify-around items-center fixed  gap-4 bg-pink-900 h-32 w-full pt-16">
          <div className="">
            <img
              src="https://fakestoreapi.com/icons/logo.png"
              alt="Logo"
              title="Logo"
              className="w-14 h-auto"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search Product here"
              name="search"
              className="border-1 p-2 rounded-full border-pink-950 text-pink-950 bg-pink-100 font-semibold w-lvh"
            />
            <i className="fa-solid fa-magnifying-glass text-pink-950 -ml-8"></i>
          </div>
          <div className="flex justify-center items-center">
            <i className="fa-solid fa-cart-shopping  text-white text-2xl relative"></i>
            <div className="flex justify-center items-center absolute bg-red-500 text-white text-xs h-5 w-5 rounded-full -mt-8 ml-6">
              {cartCount}
            </div>
          </div>
        </nav>
      </header>

      <section className="bg-pink-100 pt-10">
        <div className="flex justify-center items-center flex-col  px-10 py-10">
          <div className="flex justify-center items-center flex-col gap-4 px-10 py-10">
            {data.slice(0, 20).map((value, index) => (
              <div className="flex justify-start items-center w-3/4 h-48 gap-6 rounded-2xl shadow-2xl bg-white p-4">
                <div className="flex justify-center items-center w-40 h-40">
                  <img
                    src={value.image}
                    title={value.title}
                    alt="Product Image"
                    className="flex justify-center items-center w-full h-full object-contain "
                  />
                </div>
                <div className="flex justify-self-start items-start flex-col w-3/4 gap-4">
                  <div className="flex justify-self-start items-start flex-col gap-2">
                    <h2 className="font-bold leading-4 text-start text-pink-950">
                      {value.title}
                    </h2>
                    <p className="text-xs font-semibold leading-4">
                      {value.description}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <div className="flex w-24">
                      <p className="font-bold text-pink-950 text-xl">
                        {"$" + value.price}
                      </p>
                    </div>
                    <div className="flex items-end justify-center">
                      <button
                        className=" bg-pink-900 p-1 px-3 rounded-full text-white  cursor-pointer"
                        // onClick={addToCart(item.id)}
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div className="flex items-center px-10 gap-2">
                      <p className="text-sm text-gray-600">
                        {value.rating.rate}
                      </p>
                      <div>
                        {/* <i class="fa-solid fa-star text-xs text-amber-600"></i> */}
                        <p className="text-xs font-bold">
                          {"⭐".repeat(Math.floor(value.rating.rate))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
