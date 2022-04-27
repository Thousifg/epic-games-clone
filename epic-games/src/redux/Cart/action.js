import { ADDTOCART, REMOVECART } from "./actionType";

export const addCart = (data) => ({

    type: ADDTOCART,
    payload : data,
})

export const removeCart = (id) => {
  return {
    type: REMOVECART,
    payload: {
      id: id,
    },
  };
};

export const getCartData = () => (dispatch) => {
  fetch(`https://apple-cupcake-41384.herokuapp.com/cart`)
  .then((res) => dispatch(addCart(res)));
}
