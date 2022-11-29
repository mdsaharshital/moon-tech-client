import React, { createContext, useContext, useEffect, useState } from "react";

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = {
    products,
  };
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data?.data));
  }, []);
  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};
export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};
export default ProductProvider;
