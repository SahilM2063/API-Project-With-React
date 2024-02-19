/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import client from "../utils/axiosInstance";

export const ProductContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    try {
      const { data } = await client.get("/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
