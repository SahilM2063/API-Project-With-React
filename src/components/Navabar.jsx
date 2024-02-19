/* eslint-disable no-unused-vars */
import React from "react";

const Navabar = () => {
  return (
    <nav className="nav w-[15%] h-full bg-zinc-200 flex flex-col items-center p-5 font-[Poppins]">
      <a
        href="/create"
        className="px-6 py-2 border-[1px] border-blue-500 bg-blue-500 rounded text-white hover:text-blue-600 hover:bg-white transition-all"
      >
        Add new product
      </a>
      <div className="w-[90%] h-[1px] bg-slate-900 my-4"></div>
      <h1 className="w-full mb-4">Category Filter</h1>
      <ul className="w-full">
        <li className="flex justify-start items-center gap-3 mb-4">
          <span className="w-[10px] h-[10px] rounded-full bg-red-200"></span>
          cat 1
        </li>
        <li className="flex justify-start items-center gap-3 mb-4">
          <span className="w-[10px] h-[10px] rounded-full bg-green-200"></span>
          cat 1
        </li>
        <li className="flex justify-start items-center gap-3 mb-4">
          <span className="w-[10px] h-[10px] rounded-full bg-blue-200"></span>
          cat 1
        </li>
        <li className="flex justify-start items-center gap-3 mb-4">
          <span className="w-[10px] h-[10px] rounded-full bg-violet-200"></span>
          cat 1
        </li>
      </ul>
    </nav>
  );
};

export default Navabar;
