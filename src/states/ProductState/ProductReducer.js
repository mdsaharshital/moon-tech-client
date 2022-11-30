import { ActionType } from "./ActionTypes";

export const initialState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
  wishlist: [],
};
export const prodcutReducer = (state, action) => {
  switch (action.type) {
    case ActionType.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionType.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };
    case ActionType.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ActionType.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case ActionType.DELETE_WISHLIST:
      return {
        ...state,
        wishlist: [
          ...state.wishlist.filter((item) => item._id !== action.payload._id),
        ],
      };
    case ActionType.DELETE_CART:
      return {
        ...state,
        cart: [...state.cart.filter((item) => item._id !== action.payload._id)],
      };

    default:
      return state;
  }
};
