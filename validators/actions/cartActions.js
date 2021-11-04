export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_ITEM = "DELETE_ITEM";
export const MINUS_ITEM = "MINUS_ITEM";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    item: item,
  };
};

export const deleteItemFromCart = (item) => {
  return {
    type: DELETE_ITEM,
    item: item,
  };
};

export const minusItem = (item) => {
  return {
    type: MINUS_ITEM,
    item: item,
  };
};