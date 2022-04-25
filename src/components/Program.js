import "../styling/feature.css"
import Infobox from "./Infobox"
import { PopupButton } from "@typeform/embed-react"

const Program = () => {
	return (
		<div className="feature">
			<div className="feature-text">
				<div>
					<h1 style={{ textAlign: "center" }}>Program</h1>
				</div>
				<p>
					Tatami is an elite academy that helps ambitious gamers, no
					matter their rank, to achieve their goals, dominate the
					server, and boost their career whether in streaming,
					eSports, or coaching.
					<br />
					<br />
					Our method is tested & designed with the best coaches, you won't
					recognize yourself at the end of the program.
				</p>
			</div>
			<PopupButton id="kKo6RYeF" className="button-85 big">
				Apply
			</PopupButton>
			<div className="info-list">
				<Infobox
					emoji="⛩️"
					title="Live Dojos"
					text="In our dojo, you will take exclusive lessons with experienced coaches who will guide you through the path of the warrior. You will be able to learn game mechanics, practice advanced strategies, and train along with other players."
				/>
				<Infobox
					emoji="🥋"
					title="Sensei"
					text="Once ready, you’ll meet your sensei. Now that you know the most important mechanics and strategies, it's time to master yourself! "
				/>
				<Infobox
					emoji="📜"
					title="Scrolls"
					text="Uncertain about how to improve a specific skill? Keep it zen, we have a catalog full of scrolls for you to unroll. The library is curated by our coaches and is in continuous expansion."
				/>
				<Infobox
					emoji="🎮"
					title="Masters"
					text="Twice a month we will meet remarkable people from the gaming industry. Get to know pro players, eSports teams, tournament organizers, community leaders, game developers, analysts, and sports psychologists."
				/>
				<Infobox
					emoji="🏋️"
					title="Trainings"
					text="Knowing the theory is only part of the game. Once the sensei identifies your weaknesses he will hand you a training plan just like in the gym dojo."
				/>
				<Infobox
					emoji="🕹️"
					title="Breakdowns"
					text="Our coaches and analysts will study your matches and give you actionable tips to improve. Those who cannot remember the past are condemned to repeat it."
				/>
			</div>
		</div>
	)
}

export default Program
