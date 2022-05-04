import "../styling/FAQ.css"
import "../styling/feature.css"
import Apply from "./Apply"

const FAQ = () => {

	const QAs = [
		{
			Q: "How can I apply to be a coach?",
			A: (
				<>
					Hi, we are super happy to partner with new coaches. Try to
					surprise us by filling out this{" "}
					<a href="https://ynd1i9jcywl.typeform.com/to/HibHaWGg">
						application
					</a>
					.
				</>
			),
		},
		{
			Q: "Which language is the service offered in?",
			A: "Most of the resources on our site, including Live Dojos, will be held in English. We do however try to create classes of the same language when possible. 1to1 will be held in English except if the coach knows the language of the student",
		},
		{
			Q: "How many people are in a class?",
			A: "It varies between 15 and 25 coach included. We belive that this number provides the best experience.",
		},
		{
			Q: "Will the classes be recorded?",
			A: "Yes, all classes are recorded and can be viewed as many times as you want. Tatami includes replays, additional resources, notes and tips, and next steps all in one platform.",
		},
	]

	return (
		<div className="feature" id="faq">
			<h1 style={{ textAlign: "center", padding: "5vh" }}>FAQs</h1>
			{QAs.map(qa => (
				<div className="faq" key={qa.Q}>
					<h2>{qa.Q}</h2>
					<p>{qa.A}</p>
				</div>
			))}
			<Apply />
			<div style={{ textAlign: "center", padding: "2em 0" }} id="contact">
				<h2 style={{ fontSize: "x-large", margin: 0 }}>
					Still have doubts?
				</h2>
				<p>
					To reach us directly, shoot us a message{" "}
					<a href="mailto:team@tatami.gg">here</a>
				</p>
			</div>
		</div>
	)
}

export default FAQ
