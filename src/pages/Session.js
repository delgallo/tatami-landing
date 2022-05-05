import Coach from "../components/Coach"
import Navbar from "../components/Navbar"
import "../styling/session.css"
import "../styling/FAQ.css"
import Bottombar from "../components/Bottombar"
import { useEffect } from "react"

const Session = () => {
	const convertTZ = (date, tzString) => {
		return new Date(
			(typeof date === "string" ? new Date(date) : date).toLocaleString(
				"en-US",
				{ timeZone: tzString }
			)
		)
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
	const hisDate = convertTZ("2022/05/06 6:30:00 +0100", userTimezone)
	const formattedDate = `${hisDate.getHours()}:${hisDate.getMinutes()}`

	const QAs = [
		{
			Q: "When ?",
			A: `The lesson will take place at 6.30 PM (GMT+1) on friday 6th of May`,
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
								Wave management is an essential skill no matter
								which role you play: It makes a huge impact on
								your game. <br />
								<br />
								On the 6th of May at {formattedDate} PM, join
								other players in this 1-hour live class to learn
								how the pros do it. You'll learn the theory
								during the first half and then be guided through
								exercises to put it into practice during the
								second half.{" "}
							</p>
						</div>
						<div>
							<button
								className="button-85"
								style={{
									margin: "1em 0",
									fontSize: "medium",
									fontWeight: "normal",
								}}
								onClick={() =>
									window.open(
										"https://hpr.co/2SKQj0VbhteFrSWIe6A2s"
									)
								}
							>
								Buy now
							</button>
							<p></p>
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
