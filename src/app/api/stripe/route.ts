import { type NextRequest, NextResponse } from "next/server";
import { stripe } from "~/server/stripe/client";

export async function POST(request: NextRequest):Promise<NextResponse> {
  
  console.log(request.headers.get('origin'));
  
  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            
            currency: "gbp",
            product_data: {
              name: "Tshirt",
              description: "Test product",
              
            },
            
            unit_amount: 2000,
          },
          
    
        },
        
      ],
      mode:"payment",
      return_url: `${request.headers.get('origin')}/return?session_id={CHECKOUT_SESSION_ID}`,
    });
    console.log(session) 
    return NextResponse.json({
      sessionId: session.id,
      clientSecret:session.client_secret
    })
  } 
  catch (error) {
    console.log(error.message);
    return NextResponse.json({message:"abc"},{ status:500} )
  }
}
