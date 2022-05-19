import "../styling/popup.css"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutForm from "./CheckoutForm"
import { useState } from "react"

const stripePromise = loadStripe('pk_live_51Kvd7aFOn0gXuI3PlrkvWGEMM3GzszUpmxmfsu7pEf4nhzhdTh2EsOLRSmwRvrwPDh7rIMN4FnaVONDZ7V7aINvw003pNY9O9E')
const c = {
    title: "The complete guide to League of Legends",
    price: 49.99,
    discount: 0.00
}

const PaymentPopup = ({trigger, content}) => {

    const [con, setCon] = useState(c)

    return trigger ? (
        <div className="popup">
            <div className="glass">
                <div>
                    <h2>{c.title}</h2>
                    <p>
                        With this purchase, you will gain access to the classes described on this page. Should you be unable to attend a class, you can make it up as soon as it is rearranged. If you have any doubts or questions, you can send us a message <a href="mailto:team@tatami.gg">here</a>.    
                    </p>
                    <div className="bill">
                        <div>
                            <span>Subtotal</span>
                            <span>€{con.price}</span>
                        </div>                        
                        <div>
                            <span>Discount</span>
                            <span>-€{con.discount}</span>  
                        </div>
                        <div>
                            <span>Total due</span>
                            <span>€{Math.round((con.price - con.discount) * 100) / 100}</span>  
                        </div>
                    </div>
                </div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm content={con} setContent={setCon}/>
                </Elements>
            </div>
        </div>
    ) : ""
}

export default PaymentPopup