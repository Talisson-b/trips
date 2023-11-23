import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { authOptions } from '../auth/[...nextauth]/route'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',

})

export async function POST(request: Request) {
  const useSession = await getServerSession(authOptions)
  const req = await request.json()

  const { totalPrice, name, description, coverImage, tripId, startDate, endDate, guests } = req

  const session = await stripe.checkout.sessions.create({
    success_url: process.env.HOST_URL,
    metadata: {
      tripId,
      startDate,
      endDate,
      guests,
      userId: useSession!.user.id!
    },
    line_items: [
      {
        price_data: {
          currency: 'brl',
          unit_amount: totalPrice * 100,
          product_data: {
            name,
            description,
            images: [coverImage]
          }
        },
        quantity: 1,
      }
    ],
    mode: 'payment'
  })
  return new NextResponse(JSON.stringify({ sessionId: session.id }), { status: 200 })
}