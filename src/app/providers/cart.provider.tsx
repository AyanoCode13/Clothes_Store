"use client"

import { createContext, useContext, useReducer } from "react"
import type { CartProduct } from "../types/ProductDAO"

const CartContext = createContext({})

type Cart = {
    products: CartProduct[],
    
}

type Action = {
    type:"ADD_TO_CART" | "REMOVE_FROM_CART",
    payload:CartProduct
}

const cartReducer = (state:Cart, action:Action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export const CartProvider = ({ children }:{children:React.ReactNode}) => {
    const [cart, dispatch] = useReducer(cartReducer, { products: [] });

    return (
        <CartContext.Provider value={{products:cart.products, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = ():{
    products:CartProduct[],
    dispatch:(action:Action)=>void

} => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context as { products: CartProduct[], dispatch: (action: Action) => void };
};
