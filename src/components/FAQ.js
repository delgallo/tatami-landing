import "../styling/FAQ.css"
import "../styling/feature.css"
import { PopupButton } from "@typeform/embed-react"

const FAQ = () => {
	const QAs = [
		{
			Q: "Which games are covered by the subscription?",
			A: <>The academy is open to all League of Legends and Valorant players. But fear not, our team is moving fast, our developers are stallions, and we are partnering with more and more coaches. We already have plans in place to expand into other games! If you'd like to recommend a game for us to cover, <a href="mailto:support@tatami.gg">click here</a>.</>,
		},
		{
			Q: "When will the first cohort start?",
			A: "We are aiming to have the program up and running by early June; the exact date will be announced shortly."
		},
		{
			Q: "How can I apply to be a coach?",
			A: <>Hi, we are super happy to partner with new coaches. Try to surprise us by filling out this <a href="https://ynd1i9jcywl.typeform.com/to/HibHaWGg">application</a>.</>,
		},
		{
			Q: "Which language is the service offered in?",
			A: "Most of the resources on our site, including Live Dojos, will be held in English. We do however try to create classes of the same language when possible. 1to1 will be held in English except if the coach knows the language of the student",
		},
		{
			Q: "Will the classes be recorded?",
			A: "Yes, all classes are recorded and can be viewed as many times as you want. Tatami includes replays, additional resources, notes and tips, and next steps all in one platform.",
		},
	]
	return (
		<div className="feature">
			<h1 style={{ textAlign: "center", padding: "5vh" }}>FAQs</h1>
			{QAs.map(qa => (
				<div className="faq" key={qa.Q}>
					<h2>{qa.Q}</h2>
					<p>{qa.A}</p>
				</div>
			))}
			<PopupButton id="kKo6RYeF" className="button-85 big" onClick={() => window.fbq('trackCustom', 'clicked_apply')}>
				Apply
			</PopupButton>
			<div style={{ textAlign: "center", padding: "2em 0" }}>
				<h2 style={{ fontSize: "x-large", margin: 0 }}>
					Still have doubts?
				</h2>
				<p>
					To reach us directly, shoot us a message <a href="mailto:support@tatami.gg">here</a>
				</p>
			</div>
		</div>
	)
}

export default FAQ
