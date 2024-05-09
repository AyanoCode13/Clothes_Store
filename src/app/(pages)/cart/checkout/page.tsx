
"use client"
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useCallback } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Checkout() {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("http://localhost:3000/api/stripe", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = {fetchClientSecret};


 return (
  <div id="checkout">
    <EmbeddedCheckoutProvider
      stripe={stripePromise}
      options={options}
    >
      <EmbeddedCheckout  className='h-screen'/>
    </EmbeddedCheckoutProvider>
  </div>
)
}