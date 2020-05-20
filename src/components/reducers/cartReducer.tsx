import {
  ADD_TO_CART,
  REMOVE_ITEM,
  ADD_QUANTITY,
  SUB_QUANTITY,
} from "../actions/action-types/cart-actions";
import { Product, ProductCart } from "../../interfaces/product";
import Circle from "../../assets/circle.png";
import Rectangle from "../../assets/rectangle.png";
import Triangle from "../../assets/triangle.png";

const initState: ProductCart = {
  products: [
    {
      id: 1,
      name: "Circle",
      description: "Perfect choice when you don’t need any corners.",
      price: 999,
      img: Circle,
    },
    {
      id: 2,
      name: "Rectangle",
      description: "For once, it’s a great idea to think inside the box.",
      price: 899,
      img: Rectangle,
    },
    {
      id: 3,
      name: "Triangle",
      description: "A true classic with three elegant corners.",
      price: 1009,
      img: Triangle,
    },
  ],
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initState, action: any) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.products.find(
      (item: Product) => item.id === action.id
    );
    addedItem = addedItem as Product;

    let existed_item = state.addedItems.find(
      (item: Product) => action.id === item.id
    );
    existed_item = existed_item as Product;

    if (existed_item && addedItem) {
      (addedItem.quantity as number) += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else if (addedItem) {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }

  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(
      (item: Product) => action.id === item.id
    );
    itemToRemove = itemToRemove as Product;
    let new_items = state.addedItems.filter(
      (item: Product) => action.id !== item.id
    );

    let newTotal =
      state.total - itemToRemove.price * (itemToRemove.quantity as number);
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }

  if (action.type === ADD_QUANTITY) {
    let addedItem = state.products.find(
      (item: Product) => item.id === action.id
    );
    addedItem = addedItem as Product;
    (addedItem.quantity as number) += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }

  if (action.type === SUB_QUANTITY) {
    let addedItem = state.products.find(
      (item: Product) => item.id === action.id
    );
    addedItem = addedItem as Product;

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else if (addedItem) {
      (addedItem.quantity as number) -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }
  return state;
};

export default cartReducer;
