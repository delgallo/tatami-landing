import "../styling/FAQ.css"
import "../styling/feature.css"
import Apply from "./Apply"

const FAQ = () => {
	// const QAs = [
	// 	{
	// 		Q: "Which games are covered by the subscription?",
	// 		A: <>The academy is open to all <b>League of Legends</b>, <b>CS:GO</b> <b>and Valorant players</b>. But fear not, our team is moving fast, our developers are stallions, and we are partnering with more and more coaches. We already have plans in place to expand into other games! If you'd like to recommend a game for us to cover, <a href="mailto:team@tatami.gg">click here</a>.</>,
	// 	},
	// 	{
	// 		Q: "When will the first cohort start?",
	// 		A: "We are aiming to have the program up and running by early June; the exact date will be announced shortly."
	// 	},
	// 	{
	// 		Q: "How can I apply to be a coach?",
	// 		A: <>Hi, we are super happy to partner with new coaches. Try to surprise us by filling out this <a href="https://ynd1i9jcywl.typeform.com/to/HibHaWGg">application</a>.</>,
	// 	},
	// 	{
	// 		Q: "Which language is the service offered in?",
	// 		A: "Most of the resources on our site, including Live Dojos, will be held in English. We do however try to create classes of the same language when possible. 1to1 will be held in English except if the coach knows the language of the student",
	// 	},
	// 	{
	// 		Q: "Will the classes be recorded?",
	// 		A: "Yes, all classes are recorded and can be viewed as many times as you want. Tatami includes replays, additional resources, notes and tips, and next steps all in one platform.",
	// 	},
	// ]

	const QAs = [
		{
			Q: "How much does it cost?",
			A: "Each session has a cost of 4,99€, but you can get it for free with your personal referral link",
		},
		{
			Q: "How does referral work?",
			A: "Click here to get your referral link and send it to your friends. For each 2 friends that sign up with your link, you'll have a free coaching session. ",
		},
		{
			Q: "Who are the coaches?",
			A: "Our coaches are in the top 0,02% of their game.",
		},
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
			Q: "Is it available in my language?",
			A: "At the moment just in English, soon also in other languages",
		},
		{
			Q: "How many people are in a class?",
			A: "It varies between 15 and 25 coach included",
		},
		{
			Q: "How will the lesson be organized?",
			A: "It depends on the type, usually half of the time is spent explaining theory and the remaining part is spent answering questions, chatting and practicing exercises",
		},
		{
			Q: "Will the classes be recorded?",
			A: "Yes, all classes are recorded and can be viewed as many times as you want.",
		},
		{
			Q: "Do you also offer 1 to 1 coaching?",
			A: "Not yet, but really soon we will",
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
