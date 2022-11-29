import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
  let content;
  const {
    state: { products, loading, error },
  } = useProducts();
  // console.log(state);
  if (loading) content = <p>Loading...</p>;
  if (error) content = <p>Something went wrong</p>;
  if (!loading && !error && products.length === 0) {
    content = <p>No product to show</p>;
  }
  //
  if (!loading && !error && products.length)
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {products
          .filter((product) => product.rating >= 4)
          .map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
      </div>
    );

  return (
    <div className="">
      <h1 className="pl-6 text-3xl font-bold">Top rated products</h1>
      {content}
    </div>
  );
};

export default TopRated;
