"use client"

import { useCart } from "~/providers/cart.provider"
import type { CartProduct, ProductCardDAO } from "~/types/ProductDAO"

export default function AddToCartButton({product}:{product:ProductCardDAO}) {
    console.log(product)
    const cart = useCart()
    return (
        <button className="btn btn-primary" onClick={()=>cart.dispatch({"type":"ADD_TO_CART",payload:{...product, quantity:1}})}>Add to Cart</button>
    )
}