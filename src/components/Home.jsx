/* eslint-disable no-unused-vars */
import React from "react";
import Navabar from "./Navabar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navabar />
      <div className="h-full w-[85%] grid grid-cols-5 gap-10 p-4">
        <Link to={"/details/1"} className="group card flex flex-col max-h-[36vh] p-4 bg-white border-[1px] cursor-pointer">
          <div className="img-container w-full h-[80%] ">
            <img
              className="w-full h-full object-contain group-hover:scale-105 transition-all"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt="product"
            />
          </div>
          <div className="title w-full h-[20%] py-2">
            Lorem ipsum dolor sit.
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
