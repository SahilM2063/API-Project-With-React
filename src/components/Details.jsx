/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../utils/axiosInstance";
import Loading from "./Loading";

const Details = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const { data } = await client.get(`/products/${id}`);
      setSingleProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <>
      {singleProduct ? (
        <div className="w-full h-full flex flex-col justify-center items-center font-[Poppins]">
          <Link
            to={"/"}
            className="text-lg text-left w-[50%] hover:text-blue-500 mb-4"
          >
            Home
          </Link>
          <div className="product-details w-[50%] flex justify-between items-center gap-8 p-8 border-[1px] rounded">
            <img
              className="min-w-[30%] max-w-[26%] object-contain"
              src={singleProduct.image}
              alt="product"
            />
            <div className="content flex flex-col justify-start items-start gap-4">
              <h1 className="text-2xl font-bold">{singleProduct.title}</h1>
              <h3 className="text-sm text-gray-400">
                {singleProduct.category}
              </h3>
              <h4 className="text-lg font-semibold opacity-80">
                $ {singleProduct.price}
              </h4>
              <p className="text-sm text-gray-600">
                {singleProduct.description}
              </p>
              <div className="btn-group flex gap-2">
                <Link className="px-4 py-2 border-[1px] border-green-500 bg-green-500 rounded text-white">
                  Edit product
                </Link>
                <Link className="px-4 py-2 border-[1px] border-red-500 bg-red-500 rounded text-white ">
                  Delete product
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Details;
Details;
