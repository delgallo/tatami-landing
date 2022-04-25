import "../styling/feature.css"
import Infobox from "./Infobox"
import { PopupButton } from "@typeform/embed-react"

const Program = () => {
	return (
		<div className="feature">
			<div className="feature-text">
				<div>
					<h1 style={{ textAlign: "center" }}>Academy</h1>
				</div>
				<p>
					Tatami is an elite academy that trains ambitious gamers, to achieve their goals, dominate the server, and unlock their full potential.
					<br />
					<br />
					Our method is tested & designed with the best coaches; you will be surprised by what you are truly capable of.
				</p>
			</div>
			<PopupButton id="kKo6RYeF" className="button-85 big">
				Apply
			</PopupButton>
			<div className="info-list">
				<Infobox
					emoji="⛩️"
					title="Progressive and tailor-made learning paths"
					text="Knowledge is only the beginning. Once the sensei identifies your weaknesses you will be assigned in courses to fix them. During each course you will deep dive into a specific aspect of the game, progressing from session to session."
				/>
				<Infobox
					emoji="🥋"
					title="Learn and practice with other players"
					text="During these sessions, you will learn game mechanics, practice advanced strategies, and train along with other players. A sensei will oversee the session, ensuring every player learns and improves."
				/>
				<Infobox
					emoji="📜"
					title="Graduate, get scouted and meet professionals"
					text="Once you are ready, you will be given the opportunity to showcase your skills. At the graduation game, you will be observed by scouts from eSports teams and other professionals in the gaming industry."
				/>
			</div>
		</div>
	)
}

export default Program
