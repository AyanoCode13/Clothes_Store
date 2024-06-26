"use client";

import { useRouter } from "next/navigation";
import { useCart } from "~/providers/cart.provider"

export default function CartButton() {
  const cart = useCart();
  const router = useRouter();
  
  const handleCheckout = async ()=>{
    
    const res = await fetch("http://localhost:3000/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart.products),
    })
    const checkout_url = await res.json() as string
    router.push(checkout_url)
  }

  
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">{cart.total_items}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
      >
        <div className="card-body">
          <span className="text-lg font-bold flex">Nr. Items: {cart.total_items}</span>
          {
            cart.products.map((product, index) => (
              <div key={index} className="items-start justify-end gap-2 flex">
                <span>{product.name}</span>
                <span>{product.quantity}</span>
                <span>{product.price}</span>
              </div>
            ))
          }
          <span className="text-info">Total: {cart.total_price}</span>
          <div className="card-actions">
           <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
