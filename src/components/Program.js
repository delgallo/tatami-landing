import "../styling/feature.css"
import Infobox from "./Infobox"
import Apply from "./Apply";

const Program = () => {
	console.log("ciao")
	return (
		<div className="feature" id="program">
			<div className="feature-text">
				<div>
					<h1 style={{ textAlign: "center" }}>Academy</h1>
				</div>
				<p>
					Tatami is an elite academy that unlocks your full potential & gets you scouted by professional teams.
					<br />
					<br />
					Our classes are designed by the best coaches; you will be surprised by what you are truly capable of.
					<br />
					<br />
					Applicants for the first cohort must submit their applications by the <span style={{color: "aquamarine", fontWeight: "bold"}}>7th of May</span>.
				</p>
			</div>
			<Apply/>
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
