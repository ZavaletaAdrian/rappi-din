import { ADD_TO_CART, DELETE_ITEM, MINUS_ITEM } from "../actions/cartActions";

const initialState = {
  total: 0,
  items: [],
};

export default (state = initialState, action) => {
  const item = action.item;
  switch (action.type) {
    case ADD_TO_CART:
      if (item.quantity == 0) {
        item.id = Math.floor(Math.random() * 1001).toString();
        item.quantity = item.quantity + 1;
        return {
          total: state.total + action.item.cost,
          items: state.items.concat(action.item),
        };
      } else {
        item.quantity = item.quantity + 1;
        return {
          total: state.total + action.item.cost,
          items: state.items,
        };
      }

    case DELETE_ITEM:
      minusVal = action.item.quantity;
      action.item.quantity = 0;
      const newItems = state.items.filter(
        (itemDelete) => itemDelete.id != action.item.id
      );
      return {
        total: state.total - action.item.cost,
        items: newItems,
      };

    case MINUS_ITEM:
      if (action.item.quantity == 1) {
        minusVal = action.item.quantity;
        action.item.quantity = 0;
        const newItems = state.items.filter(
          (itemDelete) => itemDelete.id != action.item.id
        );
        return {
          total: state.total - action.item.cost * minusVal,
          items: newItems,
        };
      } else {
        action.item.quantity = action.item.quantity - 1;
        return {
          total: state.total - action.item.cost,
          items: state.items,
        };
      }
  }
  return state;
};