"use client";

import { useCart } from "../providers/cart.provider";
import type { ProductCardDAO } from "../types/ProductDAO";

export default function ProductCard({product}:{product:ProductCardDAO}) {
    const cart = useCart();
    console.log(cart);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <p>Price: {product.price}</p>
          <button className="btn btn-primary" onClick={()=>{ cart.dispatch({"type":"ADD_TO_CART", payload:{...product, quantity:1}})}}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
