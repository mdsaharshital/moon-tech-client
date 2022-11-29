import { ActionType } from "./ActionTypes";

export const initialState = {
  loading: false,
  products: [],
  error: false,
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

    default:
      return state;
  }
};
