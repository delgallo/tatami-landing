import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react"

import "../styling/stripe.css"
import { Iaxios } from "../utils/Axios"
import { EmailRE } from "../utils/regex"
import { stripePaymentMethodHandler } from "../utils/Stripe"

const CARD_OPTIONS = {
	iconStyle: "solid",
	hidePostalCode: true,
	style: {
		base: {
			iconColor: "acquamarine",
			color: "white",
			fontWeight: "bold",
			innerHeight: "fit-content",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "lightgray" },
			"::placeholder": {
				fontWeight: "normal",
			},
		},
		invalid: {
			iconColor: "red",
			color: "red",
		},
	},
}

// CUM - CI ENTRANO SOLDIIIIII
const CheckoutForm = ({ info, setInfo, con, setCon, onSuccessfulCheckout }) => {
	const stripe = useStripe()
	const elements = useElements()

	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

	const [emailValid, setEmailValid] = useState(true)
	const [codeValid, setCodeValid] = useState(true)

	const handleEmailChange = e => {
		setInfo(i => ({ ...i, email: e.target.value }))
		setEmailValid(EmailRE.test(e.target.value))
	}

	useEffect(() => {
		Iaxios.get(`/utils/getDiscount/${info.referral}`)
			.then(res => {
				const discount = Math.round(res.data * con.price)
				if (discount === 0) setCodeValid(false)
				else setCodeValid(true)

				setCon(c => ({
					...c,
					discounted_price:
						Math.round((con.price - discount) * 100) / 100,
				}))
				setCon(c => ({ ...c, discount: discount }))
			})
			.catch(err => console.log(err))
	}, [info.referral])

	useEffect(() => {
		if (!error) return
		// if there is no error we should do nothing

		const timer = setTimeout(() => setError(null), 8000)
		return () => clearTimeout(timer)
	}, [error])

	const handleSubmit = async e => {
		e.preventDefault()

		const info = {
			name: e.target.name.value,
			email: e.target.email.value,
			referral: e.target.referral.value,
			courseID: "62850ea5aea6ae0fc120f0c8", // TODO RENDI DINAMICO
		}

		setIsLoading(true)

		const cardElement = elements.getElement("card")

		const result = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement,
			billing_details: { name: info.name, email: info.email },
		})

		if (result.error) {
			setError(result.error.message)
			return
		}

		const res = await stripePaymentMethodHandler(result, stripe, info)
		if (res !== "success") setError(res)
		setIsLoading(false)
	}

	return (
		<form onSubmit={handleSubmit} className="stripe-form">
			<input
				type="text"
				name="name"
				placeholder="Name"
				value={info.name}
				onChange={e => setInfo(i => ({ ...i, name: e.target.value }))}
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				value={info.email}
				style={emailValid ? {} : { border: "1px solid red" }}
				onChange={handleEmailChange}
			/>
			<input
				type="text"
				name="referral"
				placeholder="Referrall code"
				value={info.referral}
				style={codeValid ? {} : { border: "1px solid red" }}
				onChange={e =>
					setInfo(i => ({ ...i, referral: e.target.value }))
				}
			/>
			<CardElement className="card-details" options={CARD_OPTIONS} />
			<p
				style={{
					color: "LightCoral",
					textAlign: "center",
					lineHeight: 1.2,
					minHeight: "1.2em",
				}}
			>
				{error ? error : ""}
			</p>
			<button disabled={!stripe && isLoading} className="dashing-button">
				<svg
					aria-hidden="true"
					focusable="false"
					data-prefix="fas"
					data-icon="lock"
					className="svg-inline--fa fa-lock mr-2"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				>
					<path
						fill="currentColor"
						d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"
					></path>
				</svg>
				{isLoading ? "Loading..." : `Pay €${con.discounted_price}`}
			</button>
		</form>
	)
}

export default CheckoutForm
