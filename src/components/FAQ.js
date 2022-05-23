import "../styling/FAQ.css"
import "../styling/feature.css"

const FAQ = () => {
	const QAs = [
		{
			Q: "How can I apply to be a coach?",
			A: (
				<>
					We are super happy to partner with new coaches. Try to
					surprise us by filling out this{" "}
					<a href="https://ynd1i9jcywl.typeform.com/to/HibHaWGg">
						application
					</a>
					.
				</>
			),
		},
		{
			Q: "What languages are supported?",
			A: "The resources on our site are all available in English. We try to create classes of the same language when possible.",
		},
		{
			Q: "How many people are in a class?",
			A: "Depending on the topic it varies between 15 and 20 (coach included)",
		},
		{
			Q: "Will the classes be recorded?",
			A: "Yes, all classes are recorded and can be viewed as many times as you want.",
		},
	]

	return (
		<div className="feature" id="faq">
			<h1 style={{ textAlign: "center", padding: "10vh 0 5vh" }}>FAQs</h1>
			{QAs.map(qa => (
				<div className="faq" key={qa.Q}>
					<h2>{qa.Q}</h2>
					<p>{qa.A}</p>
				</div>
			))}
			<div
				style={{ textAlign: "center", padding: "1em 0 3em" }}
				id="contact"
			>
				<h2 style={{ fontSize: "x-large", margin: "1em 0" }}>
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
