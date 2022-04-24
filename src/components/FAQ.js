import "../styling/FAQ.css"
import "../styling/feature.css"
import { PopupButton } from '@typeform/embed-react'

const FAQ = () => {
    const QAs = [
        {
            Q: "Who should apply to Arc?", 
            A: "This company building program is for seed-stage founders actively working on an idea, product and company.  For some, this means coming to us with an idea and no lines of code like Patrick and John of Stripe.  For others, it is a MVP site with 1000 listings like Brian, Nate and Joe of Airbnb."
        },
        {
            Q: "Who should apply to Arc?", 
            A: "This company building program is for seed-stage founders actively working on an idea, product and company.  For some, this means coming to us with an idea and no lines of code like Patrick and John of Stripe.  For others, it is a MVP site with 1000 listings like Brian, Nate and Joe of Airbnb."
        },
        {
            Q: "Who should apply to Arc?", 
            A: "This company building program is for seed-stage founders actively working on an idea, product and company.  For some, this means coming to us with an idea and no lines of code like Patrick and John of Stripe.  For others, it is a MVP site with 1000 listings like Brian, Nate and Joe of Airbnb."
        },
        {
            Q: "Who should apply to Arc?", 
            A: "This company building program is for seed-stage founders actively working on an idea, product and company.  For some, this means coming to us with an idea and no lines of code like Patrick and John of Stripe.  For others, it is a MVP site with 1000 listings like Brian, Nate and Joe of Airbnb."
        },
    ]
    return (
        <div className="feature">
            <h1 style={{textAlign: "center", padding: "1em"}}>FAQs</h1>
            { QAs.map((qa) => 
                <div className="faq" key={qa.Q}>
                    <h2>{qa.Q}</h2>
                    <p>{qa.A}</p>
                </div>
            )}
            <PopupButton id="kKo6RYeF" className="button-85 big">
                Apply
            </PopupButton>
            <div style={{textAlign: "center", padding: "2em 0"}}>
                <h2 style={{fontSize: "x-large", margin: 0}}>Still have doubts?</h2> 
                <p>If you want to talk to us directly shoot us a message on <a href="" style={{color: "aquamarine", fontWeight: "bold"}}>Discord</a></p>
            </div>
        </div>
    )
}

export default FAQ