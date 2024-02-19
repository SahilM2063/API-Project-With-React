/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import Navabar from "./Navabar";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../context/Context";
import Loading from "./Loading";
import client from "../utils/axiosInstance";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setFilteredProducts] = useState(null);

  const getCategoricalProducts = async () => {
    try {
      const { data } = await client.get(`/products/category/${category}`);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filteredProducts || category == "undefined")
      setFilteredProducts(products);
    if (category !== "undefined") getCategoricalProducts();
  }, [category, products]);

  return (
    <>
      {products ? (
        <>
          <Navabar />
          <div className="h-full w-[85%] grid grid-cols-5 gap-10 p-4 overflow-x-hidden">
            {filteredProducts &&
              filteredProducts.map((p, index) => (
                <Link
                  key={index}
                  to={`/details/${p.id}`}
                  className="group card flex flex-col max-h-[36vh] p-4 bg-white border-[1px] cursor-pointer"
                >
                  <div className="img-container w-full h-[80%] ">
                    <img
                      className="w-full h-full object-contain group-hover:scale-105 transition-all"
                      src={p.image}
                      alt="product"
                    />
                  </div>
                  <div className="title w-full h-[20%] py-2">
                    {p.title.length > 40
                      ? p.title.slice(0, 40) + "..."
                      : p.title}
                  </div>
                </Link>
              ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
