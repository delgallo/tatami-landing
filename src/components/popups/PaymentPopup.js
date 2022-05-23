import "../../styling/popup.css"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutForm from "../CheckoutForm"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const stripePromise = loadStripe(
	process.env.REACT_APP_TEST
		? process.env.REACT_APP_STRIPE_TEST
		: "pk_live_51Kvd7aFOn0gXuI3PlrkvWGEMM3GzszUpmxmfsu7pEf4nhzhdTh2EsOLRSmwRvrwPDh7rIMN4FnaVONDZ7V7aINvw003pNY9O9E"
)

const PaymentPopup = ({ title, price, onSuccessfulCheckout }) => {
	const [con, setCon] = useState({
		discount: 0,
		price: price,
		discounted_price: price,
	})
	const [info, setInfo] = useState({
		name: "",
		email: "",
		referral: useSelector(s => s.referral),
	})

	return (
		<>
			<div>
				<h2>{title}</h2>
				<p>
					With this purchase, you will gain access to the classes
					described on this page. Should you be unable to attend a
					class, you can make it up as soon as it is rearranged. If
					you have any doubts or questions, you can send us a message{" "}
					<a href="mailto:team@tatami.gg">here</a>.
				</p>
				<div className="bill">
					<div>
						<span>Subtotal</span>
						<span>€{price}</span>
					</div>
					<div>
						<span>Discount</span>
						<span>-€{con.discount}</span>
					</div>
					<div>
						<span>Total due</span>
						<span>€{con.discounted_price}</span>
					</div>
				</div>
			</div>
			<Elements stripe={stripePromise}>
				<CheckoutForm
					info={info}
					setInfo={setInfo}
					con={con}
					setCon={setCon}
					onSuccessfulCheckout={onSuccessfulCheckout}
				/>
			</Elements>
		</>
	)
}

export default PaymentPopup
