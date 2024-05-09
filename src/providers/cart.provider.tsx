"use client";

import { createContext, useContext, useReducer } from "react";
import type { CartProduct } from "~/types/ProductDAO";

const CartContext = createContext({});

type Cart = {
  products: CartProduct[];
  total_price: number;
  total_items: number;
};

type Action = {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART";
  payload: CartProduct;
};

const cartReducer = (state: Cart, action: Action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.products.find((product) => product.id === action.payload.id)) {
        return {
          ...state,
          products: state.products.map((product) => {
            if (product.id === action.payload.id) {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            }
            return product;
          }),
          total_price: state.total_price + action.payload.price,
          total_items: state.total_items + 1,
        };
      }
      return {
        ...state,
        products: [...state.products, action.payload],
        total_price: state.total_price + action.payload.price,
        total_items: state.total_items + 1,
      };
    case "REMOVE_FROM_CART":
      if (
        state.products.find(
          (product) => product.id === action.payload.id && product.quantity > 1,
        )
      ) {
        return {
          ...state,
          products: state.products.map((product) => {
            if (product.id === action.payload.id) {
              return {
                ...product,
                quantity: product.quantity - 1,
              };
            }
            return product;
          }),
          total_price: state.total_price - action.payload.price,
          total_items: state.total_items - 1,
        };
      }
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id,
        ),
        total_price: state.total_price - action.payload.price,
        total_items: state.total_items - 1,
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    products: [],
    total_price: 0,
    total_items: 0,
  });

  return (
    <CartContext.Provider
      value={{
        products: cart.products,
        dispatch,
        total_price: cart.total_price,
        total_items: cart.total_items,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): {
  products: CartProduct[];
  total_price: number;
  total_items: number;
  dispatch: (action: Action) => void;
} => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context as {
    products: CartProduct[];
    total_price: number;
    total_items: number;
    dispatch: (action: Action) => void;
  };
};
