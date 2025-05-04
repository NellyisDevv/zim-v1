import Stripe from 'stripe'
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

import db from '@/db/drizzle'
import { stripe } from '@/lib/stripe'
import { userSubscription } from '@/db/schema'

export async function POST(req: Request) {
  const body = await req.text()
  const signature = (await headers()).get('Stripe-Signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error: any) {
    return new NextResponse(`Webhook error: ${error.message}`, {
      status: 400,
    })
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session

      if (!session?.metadata?.userId) {
        return new NextResponse('User ID is required', { status: 400 })
      }

      const subscriptionId = session.subscription
      if (typeof subscriptionId !== 'string') {
        return new NextResponse('Valid subscription ID is required', {
          status: 400,
        })
      }

      const subscription = await stripe.subscriptions.retrieve(subscriptionId)

      await db.insert(userSubscription).values({
        userId: session.metadata.userId,
        stripeSubscriptionId: subscription.id,
        stripeCustomerId: subscription.customer as string,
        stripePriceId: subscription.items.data[0].price.id,
        stripeCurrentPeriodEnd: new Date(),
      })
    }

    if (event.type === 'invoice.payment_succeeded') {
      const invoice = event.data.object as Stripe.Invoice

      // Use type assertion to access the subscription property which exists in the API
      // but might be missing in TypeScript definitions
      const subscriptionId = (invoice as any).subscription
      if (typeof subscriptionId !== 'string') {
        return new NextResponse('Valid subscription ID is required', {
          status: 400,
        })
      }

      const subscription = await stripe.subscriptions.retrieve(subscriptionId)

      await db
        .update(userSubscription)
        .set({
          stripePriceId: subscription.items.data[0].price.id,
          // subscription.current_period_end * 1000,
          stripeCurrentPeriodEnd: new Date(),
        })
        .where(eq(userSubscription.stripeSubscriptionId, subscription.id))
    }

    return new NextResponse(null, { status: 200 })
  } catch (error: any) {
    console.error('Stripe webhook error:', error)
    return new NextResponse(`Webhook processing error: ${error.message}`, {
      status: 500,
    })
  }
}
