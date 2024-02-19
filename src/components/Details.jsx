/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-full h-full flex justify-center items-center font-[Poppins]">
      <div className="product-details w-[50%] flex justify-between items-center gap-8 p-8 border-[1px] rounded">
        <img
          className="min-w-[30%] max-w-[26%] object-contain"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product"
        />
        <div className="content flex flex-col justify-start items-start gap-4">
          <h1 className="text-2xl font-bold">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h1>
          <h3 className="text-sm text-gray-400">Mens clothing</h3>
          <h4 className="text-lg font-semibold opacity-80">109.95 $</h4>
          <p className="text-sm text-gray-600">
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
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
  );
};

export default Details;
Details;
