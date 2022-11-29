import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const Cart = () => {
  let content;
  const {
    state: { cart, loading, error },
  } = useProducts();
  // console.log(state);
  if (loading) content = <p>Loading...</p>;
  if (error) content = <p>Something went wrong</p>;
  if (!loading && !error && cart.length === 0) {
    content = <p>No cart product to show</p>;
  }
  //
  if (!loading && !error && cart.length)
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {cart.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    );

  return (
    <div className="">
      <h1 className="pl-6 text-3xl font-bold">Cart</h1>
      {content}
    </div>
  );
};

export default Cart;
