
import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { stripe } from "~/server/stripe/client";
import type { CheckoutProduct } from "~/types/ProductDAO";

export async function POST(req: NextRequest) {
    const items = await req.json() as CheckoutProduct[]
  
    const checkout_items = items.map(item=>{
        return {
          quantity: item.quantity,
          price_data: {
            currency: "gbp",
            product_data: {
              name: item.name,
              
            },
            unit_amount: item.price * 100,
          },
        }
      
      })  
      try {
        console.log(stripe);
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
        
        return NextRequest.json({message:error.message})
      }
}