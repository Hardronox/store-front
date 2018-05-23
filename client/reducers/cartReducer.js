import {
  ADD_ITEM_TO_CART_FULFILLED, ADD_ITEM_TO_CART_REJECTED,
  REMOVE_ITEM_FROM_CART_FULFILLED, REMOVE_ITEM_FROM_CART_REJECTED,
  REMOVE_ALL_ITEMS_FROM_CART_FULFILLED, REMOVE_ALL_ITEMS_FROM_CART_REJECTED,
} from '../constants/actionTypes';
import {base_url} from "../config";
import {saveState, loadState} from '../utils/localStorage'

const cartItems = [
    {
        id: 1,
        seller: "acronwing23342",
        image: "https://iheartcats.com/wp-content/uploads/2015/02/5255462794_19f91d3463_z-e1424134684199.jpg",
        title: "Kitty",
        description: {
            "condition": "battered",
            "color": "gray",
            "model": "iKitty 6S",
            "storage": "64GB"
        },
        price: 121.99,
        shippingCharge: 39.82,
        quantity: 1
    },
    {
        id: 2,
        seller: "acronwing23342",
        image: "https://iheartcats.com/wp-content/uploads/2015/02/5255462794_19f91d3463_z-e1424134684199.jpg",
        title: "Kitty",
        description: {
            "condition": "battered",
            "color": "gray",
            "model": "iKitty 6S",
            "storage": "64GB"
        },
        price: 121.99,
        shippingCharge: 39.82,
        quantity: 1
    },
    {
        id: 3,
        seller: "acronwing23342",
        image: "https://iheartcats.com/wp-content/uploads/2015/02/5255462794_19f91d3463_z-e1424134684199.jpg",
        title: "Kitty",
        description: {
            "condition": "battered",
            "color": "gray",
            "model": "iKitty 6S",
            "storage": "64GB"
        },
        price: 121.99,
        shippingCharge: 39.82,
        quantity: 1
    },
    {
        id: 4,
        seller: "acronwing23342",
        image: "https://iheartcats.com/wp-content/uploads/2015/02/5255462794_19f91d3463_z-e1424134684199.jpg",
        title: "Kitty",
        description: {
            "condition": "battered",
            "color": "gray",
            "model": "iKitty 6S",
            "storage": "64GB"
        },
        price: 121.99,
        shippingCharge: 39.82,
        quantity: 1
    },
    {
        id: 5,
        seller: "acronwing23342",
        image: "https://iheartcats.com/wp-content/uploads/2015/02/5255462794_19f91d3463_z-e1424134684199.jpg",
        title: "Kitty",
        description: {
            "condition": "battered",
            "color": "gray",
            "model": "iKitty 6S",
            "storage": "64GB"
        },
        price: 121.99,
        shippingCharge: 39.82,
        quantity: 1
    },
    {
        id: 6,
        seller: "acronwing23342",
        image: "https://iheartcats.com/wp-content/uploads/2015/02/5255462794_19f91d3463_z-e1424134684199.jpg",
        title: "Kitty",
        description: {
            "condition": "battered",
            "color": "gray",
            "model": "iKitty 6S",
            "storage": "64GB"
        },
        price: 121.99,
        shippingCharge: 39.82,
        quantity: 1
    },
];

const initialState = {
  // cartProducts: loadState('cartProducts') ? loadState('cartProducts') : cartItems,
    cartProducts: cartItems
};

/**
 * reducer for companies
 * @param {Object} state - application state
 * @param {Object<type>} action
 */
const itemsReducer = (state = initialState, action) => {
  let { type } = action;
  let cartProducts = [...state.cartProducts];

  switch(type) {

    case ADD_ITEM_TO_CART_FULFILLED: {

      cartProducts.push(action.payload);
      saveState('cartProducts', cartProducts);

      return {
        ...state,
        cartProducts
      };
    }
    case ADD_ITEM_TO_CART_REJECTED: {
      return {
        ...state,
        keksStatus: action.error
      };
    }

    case REMOVE_ITEM_FROM_CART_FULFILLED: {

      let newCartProducts = cartProducts.filter((item) => {
        if (item.id !== action.payload) {
          return item;
        }
      });

      saveState('cartProducts', newCartProducts);

      return {
        ...state,
        cartProducts: newCartProducts
      };
    }
    case REMOVE_ITEM_FROM_CART_REJECTED: {
      return {
        ...state,
        keksStatus: action.error
      };
    }

    case REMOVE_ALL_ITEMS_FROM_CART_FULFILLED: {

      cartProducts = [];
      saveState('cartProducts', cartProducts);

      return {
        ...state,
        cartProducts
      };
    }
    case REMOVE_ALL_ITEMS_FROM_CART_REJECTED: {
      return {
        ...state,
        keksStatus: action.error
      };
    }

    default:
      return state;
  }
};

export default itemsReducer;
