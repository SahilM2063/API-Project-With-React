/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ProductContext } from "../context/Context";
import { Link, useLocation } from "react-router-dom";

const Navabar = () => {
  const [products, setProducts] = useContext(ProductContext);

  const { search, pathname } = useLocation();

  let differentCategories =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  differentCategories = [...new Set(differentCategories)];
  console.log(differentCategories);

  return (
    <nav className="nav w-[15%] h-full bg-zinc-200 flex flex-col items-center p-5 font-[Poppins]">
      {(pathname != "/" || search.length > 0) && (
        <Link
          to={"/"}
          className="text-lg w-full text-start hover:text-blue-500 mb-4"
        >
          Home
        </Link>
      )}
      <a
        href="/create"
        className="px-6 py-2 border-[1px] border-blue-500 bg-blue-500 rounded text-white hover:text-blue-600 hover:bg-white transition-all"
      >
        Add new product
      </a>
      <div className="w-[90%] h-[1px] bg-slate-900 my-4"></div>
      <h1 className="w-full mb-4">Category Filter</h1>
      <ul className="w-full">
        {differentCategories.map((cat, i) => (
          <Link
            key={i}
            to={`/?category=${cat}`}
            className="flex justify-start items-center gap-3 mb-4"
          >
            <span className="w-[10px] h-[10px] rounded-full bg-zinc-800"></span>
            {cat}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navabar;
