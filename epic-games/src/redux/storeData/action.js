import { STORE_DATA } from "./actionType";

export const storeData = (data) => ({
  type: STORE_DATA,
  payload: data,
});


export const getGmsData = () => (dispatch) => {
  fetch("https://apple-cupcake-41384.herokuapp.com/games")
  .then((data) => data)
  .then((res) => dispatch(storeData(res)));
}