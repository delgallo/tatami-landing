import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'
import { useState } from 'react'

import "../styling/stripe.css"

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "acquamarine",
			color: "white",
			fontWeight: "bold",
      innerHeight: "fit-content",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "lightgray" },
			"::placeholder": { 
        fontWeight: "normal"
      }
		},
		invalid: {
			iconColor: "red",
			color: "red"
		}
	}
}

const CheckoutForm = ({content, setContent}) => {

  const stripe = useStripe()
  const elements = useElements()

  const [code, setCode] = useState("")

  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    })

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message)
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  }

  const changeCode = value => {
    setCode(value)

    // TODO check value with API
    let discount = 0

    if (value) discount = 10

    setContent(c => ({...c, discount: discount}))
  }

  return (
    <form onSubmit={handleSubmit} className="stripe-form">
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="text" placeholder="Referrall code" value={code} onChange={e => changeCode(e.target.value)}/>
        <CardElement options={CARD_OPTIONS} className="card-details"/>
      <button disabled={!stripe} className="dashing-button">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock" className="svg-inline--fa fa-lock mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path></svg>
        Pay €{Math.round((content.price - content.discount) * 100) / 100}
      </button>
    </form>
  )
}

export default CheckoutForm