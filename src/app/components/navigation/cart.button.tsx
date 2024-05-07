"use client"

import { useCart } from "~/app/providers/cart.provider"

export default function CartButton(){
    const cart = useCart()
    console.log(cart)
    return(
        <button className="cart-button">
            Cart
            <span className="cart-button-count">{cart.products.length}</span>
            
        </button>
    )
}