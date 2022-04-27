import { ADDTOCART } from "./actionType.js";
import { REMOVECART } from "./actionType.js";

const INITIAL_STATE = {
  products: [],
  cart: [],
  currentItem: null,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADDTOCART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVECART:
      const data1 = state.cart.filter((el) => el.id !== action.payload.id);
      return {
        ...state,
        cart: data1,
      };
    default:
      return state;
  }
};
