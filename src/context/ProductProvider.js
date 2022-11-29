import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ActionType } from "../states/ProductState/ActionTypes";
import {
  initialState,
  prodcutReducer,
} from "./../states/ProductState/ProductReducer";

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(prodcutReducer, initialState);
  console.log(state);
  const value = {
    state,
    dispatch,
  };
  //
  useEffect(() => {
    dispatch({ type: ActionType.FETCHING_START });
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: ActionType.FETCHING_SUCCESS, payload: data?.data });
      })
      .catch(() => {
        dispatch({ type: ActionType.FETCHING_ERROR });
      });
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
