import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useProducts } from "../context/ProductProvider";
import { ActionType } from "../states/ProductState/ActionTypes";

const ProductCard = ({ product }) => {
  const { pathname } = useLocation();
  const { dispatch } = useProducts();
  return (
    <div
      className="shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900"
      key={product._id}
    >
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature, index) => {
            return (
              <li className="text-sm " key={index}>
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {pathname === "/cart" ? (
          <button
            className="bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
            onClick={() =>
              dispatch({ type: ActionType.DELETE_CART, payload: product })
            }
          >
            Remove from cart
          </button>
        ) : (
          <button
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
            onClick={() =>
              dispatch({ type: ActionType.ADD_TO_CART, payload: product })
            }
          >
            Add to cart
          </button>
        )}
        {pathname === "/wishlist" ? (
          <button
            onClick={() =>
              dispatch({ type: ActionType.DELETE_WISHLIST, payload: product })
            }
            title="Add to wishlist"
            className="bg-red-500  py-1 px-2 rounded-full text-white"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: ActionType.ADD_TO_WISHLIST, payload: product })
            }
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
