import { type NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { stripe } from "~/server/stripe/client";
import type { CheckoutProduct } from "~/types/ProductDAO";

export async function POST(request: NextRequest) {
  
  const items = await request.json() as CheckoutProduct[];
  const checkout_items = items.map(item=>{
    return {
      quantity: item.quantity,
      price_data: {
        currency: "gbp",
        product_data: {
          name: item.name,
          description: item.description,
          
        },
        unit_amount: item.price * 100,
      },
    }
  
  })  
  try {
    const session: Stripe.Response<Stripe.Checkout.Session> = await stripe.checkout.sessions.create({
      line_items: checkout_items,
      mode:"payment",
      success_url: "http://localhost:3000",
      cancel_url: "http://localhost:3000",
      automatic_tax: { enabled: true },   
      
    });
    return NextResponse.json(session.url)
  } 
  catch (error) {
    console.log(error.message);
    return NextResponse.json({message:"abc"},{ status:500} )
  }
}
