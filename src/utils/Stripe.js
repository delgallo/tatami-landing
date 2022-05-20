import { Iaxios } from "./Axios"

export const stripePaymentMethodHandler = async (result, stripe, info) => {
	if (result.error) return result.error

	// If the result has no errors we can continue
	const res = await Iaxios.post("/stripe/buyCourse", {
		...info,
		payment_method_id: result.paymentMethod.id,
	})

	return handleServerResponse(res, stripe, info)
}

const handleServerResponse = async (res, stripe, info) => {
	if (res.data.error) return res.data.error

	// If we have no errors here either

	if (!res.data.requires_action) return "success"

	// If we need to further validate the payment method
	// Use Stripe.js to handle the required card action
	const { error: errorAction, paymentIntent } = await stripe.handleCardAction(
		res.data.payment_intent_client_secret
	)

	if (errorAction) return errorAction

	// The card action has been handled
	// The PaymentIntent can be confirmed again on the server
	const resHandled = await Iaxios.post("/stripe/buyCourse", {
		...info,
		payment_intent_id: paymentIntent.id,
	})

	return handleServerResponse(resHandled, stripe)
}
