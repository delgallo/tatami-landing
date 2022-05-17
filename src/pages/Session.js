import Coach from "../components/Coach"
import Navbar from "../components/Navbar"
import Bottombar from "../components/Bottombar"
import "../styling/session.css"
import "../styling/FAQ.css"
import { useEffect } from "react"

const Session = () => {
	useEffect(() => window.scrollTo(0, 0), [])

	const convertTZ = (date, tzString) => {
		return new Date(date.toLocaleString("en-US", { timeZone: tzString }))
	}

	const COACH_DATE = new Date("2022/05/06 18:30:00 +0100")
	const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
	const userDate = convertTZ(COACH_DATE, userTimezone)
	const formattedDate = `${userDate.getHours()}:${userDate.getMinutes()} (${userTimezone})`

	const QAs = [
		{
			Q: "When ?",
			A: `The lesson will take place at 18:30 (GMT+1) on friday 6th of May`,
		},
		{
			Q: "Where ?",
			A: "This lesson will take place in our private tatami discord server. You will receive details to join by email after checkout.",
		},
	]

	return (
		<>
			<Navbar />
			<div className="session-bg">
				<div className="session">
					<h1>Wave Management Live Masterclass</h1>
					<div className="session-flex">
						<div>
							<p style={{ lineHeight: 1.4 }}>
								An essential skill no matter which role you
								play: It makes a huge impact on your game.{" "}
								<br />
								On the 6th of May at {formattedDate}, join other
								players in this 1-hour live class to learn how
								the pros do it. You'll learn the theory during
								the first half and then be guided through
								exercises to put it into practice during the
								second half.{" "}
							</p>
						</div>
						<div>
							<button
								className="button-85"
								style={{
									margin: "1em auto",
									fontSize: "medium",
									fontWeight: "normal",
									width: "60%",
								}}
								onClick={() =>
									window.open(
										"https://tatami.hyper.co/purchase?link=uZ9zNVqGQ4RdQe862SkgZ"
									)
								}
							>
								Join now
							</button>
							<Coach />
						</div>
					</div>
					<div>
						{QAs.map(qa => (
							<div className="faq" key={qa.Q}>
								<h2>{qa.Q}</h2>
								<p>{qa.A}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<Bottombar />
		</>
	)
}

export default Session
