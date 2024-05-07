"use client";

import { useCart } from "~/app/providers/cart.provider";

export default function CartButton() {
  const cart = useCart();
  console.log(cart);
  return (
    <div className="indicator bg-blue">
    <span className="indicator-item badge badge-secondary">99+</span> 
    <button className="btn">inbox</button>
  </div>
  
  );
}
