import Navbar from "../components/Navbar"
import Bottombar from "../components/Bottombar"
import cover from "../assets/azir.png"
import "../styling/course.css"
import "../styling/design.css"
import "../styling/syllabus.css"
import { useEffect, useState } from "react"
import TimeWidget from "../components/Time"
import Coach from "../components/Coach"
import PaymentPopup from "../components/popups/PaymentPopup"
import SplittedPopup from "../components/popups/SplittedPopup"
import { PopupStates } from "../utils/enums"
import Thanks from "../components/popups/ThanksPopup"
import { useParams } from "react-router-dom"

const content = {
	title: "The complete guide to League of Legends",
	description:
		"This course is designed to give you all the tools to understand league of legends better, have more fun & achieve that sweet victory.\r At first glance, the course topics may seem simple, yet they are treated almost as rigorously as mathematics. With Tatami you will learn how to turn every aspect of the game to your advantage.\nThe onboarding is simple: during the purchase, we will ask you for your email address. You will receive an email invitation a few days before each lesson begins.\nThe course will be held on our platform at the time shown down below.",
	price: 49.99,
	thumbnail:
		"https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf06237d0ebbe32e0/5efc23abee48da0f762bc2f2/LOL_PROMOART_4.jpg",
	coach: {
		name: "Sagittarius",
		img: "https://tatami-static.s3.eu-central-1.amazonaws.com/ava.jpg",
		description:
			"Sagittarius is a full-time high ELO coach, with many years of competitive and coaching experience. He helps his students improve their performance by identifying their key mistakes and correcting their bad habits. He is currently ranked #1 Lucian in the world,  but can coach all roles and playstyles!",
	},
	syllabus: [
		{
			title: "Think like a pro",
			description:
				"Every great player starts from a great mindset, but also from settings and map awareness",
			when: "2022-05-30T17:30:00Z",
		},
		{
			title: "Drafting, meta, itemization",
			description:
				"Learn the gears, champions and runes, build your victory from the start",
			when: "2022-06-01T17:30:00Z",
		},
		{
			title: "Auto-attacks & mechanics pt.1",
			description:
				"Master the guns, master the game, from attack range to input buffering",
			when: "2022-06-06T17:30:00Z",
		},
		{
			title: "Auto-attacks & mechanics pt.2",
			description:
				"Master the guns, master the game, from attack range to input buffering",
			when: "2022-06-08T17:30:00Z",
		},
		{
			title: "Windows of opportunity",
			description:
				"If you had one shot, one opportunity…you don’t wanna miss that",
			when: "2022-06-13T17:30:00Z",
		},
		{
			title: "Wave management & control",
			description:
				"Freedom is control, start handling the flow of the minion waves",
			when: "2022-06-15T17:30:00Z",
		},
		{
			title: "Map & Macro pt.1",
			description:
				"Know your battleground and use it to your advantage, from quadrants to tempo",
			when: "2022-06-20T17:30:00Z",
		},
		{
			title: "Map & Macro pt.2",
			description:
				"Know your battleground and use it to your advantage, from quadrants to tempo",
			when: "2022-06-22T17:30:00Z",
		},
	],
}

const Course = () => {
	const [seeMore, setSeeMore] = useState(false)
	const [popup, setPopup] = useState(PopupStates.none)

	const { slug } = useParams()

	useEffect(() => window.scrollTo(0, 0), [])

	useEffect(() => {
		console.log(slug)
	}, [])

	return (
		<>
			<Navbar />
			<SplittedPopup>
				{(() => {
					switch (popup) {
						case PopupStates.payment:
							return (
								<PaymentPopup
									title={content.title}
									price={content.price}
									onSuccessfulCheckout={() =>
										setPopup(PopupStates.thanks)
									}
								/>
							)
						case PopupStates.thanks:
							return <Thanks />
						case PopupStates.none:
						default:
							return null
					}
				})()}
			</SplittedPopup>
			<div
				className="course-header"
				style={{
					background: `url(${content.thumbnail})`,
					boxShadow: "inset 0 0 0 100vw rgba(20, 20, 26, 0.6)",
				}}
			>
				<div>
					<h1 style={{ textShadow: "0 0 8px black" }}>
						{content.title}
					</h1>
					<button
						className="button-85"
						style={{ margin: 0 }}
						onClick={() => setPopup(PopupStates.payment)}
					>
						Join now
					</button>
				</div>
				<div>
					<div style={{ position: "relative" }}>
						<div className="img-background glass" />
						<img className="course-img" src={cover} />
					</div>
				</div>
			</div>
			<div className="contents">
				<div className="course-description">
					{seeMore ? (
						content.description.split("\n").map(str => (
							<p key={str} style={{ marginBottom: "1em" }}>
								{str}
							</p>
						))
					) : (
						<span>{content.description.split("\r")[0]}.. </span>
					)}
					<a
						onClick={() => setSeeMore(s => !s)}
						style={{
							cursor: "pointer",
							transition: "transform 2s",
						}}
					>
						{seeMore ? "show less" : "show more"}
					</a>
				</div>
				<div className="syllabus">
					{content.syllabus.map(s => (
						<div className="glass" key={s.title}>
							<div>
								<h3>{s.title}</h3>
								<p>{s.description}</p>
							</div>
							<TimeWidget time={new Date(s.when)} />
						</div>
					))}
				</div>
				<Coach coach={content.coach} />
			</div>
			<Bottombar />
		</>
	)
}

export default Course
