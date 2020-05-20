import {
  ADD_TO_CART,
  ADD_QUANTITY,
  REMOVE_ITEM,
  SUB_QUANTITY,
} from "./action-types/cart-actions";

export const addToCart = (id: number) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

export const addQuantity = (id: number) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};

export const subtractQuantity = (id: number) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};

export const removeItem = (id: number) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
