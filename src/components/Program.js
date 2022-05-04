import "../styling/feature.css"
import Infobox from "./Infobox"
import Apply from "./Apply"

const Program = () => {
	return (
		<div className="feature" id="program">
			<div className="feature-text">
				<div>
					<h1 style={{ textAlign: "center" }}>Academy</h1>
				</div>
				<p>
					We organize online classes of 20 students of the same level,
					you will meet new players and train with them.
					<br />
					<br />
					Here in Tatami we believe that the best way to improve is to
					have high-quality theoretical content and then practice a
					lot.
					<br />
					<br />
					Coming soon we will also have 1 to 1 coaching and an
					official graduation with the chance of playing & get scouted
					by a professional eSport team!
					.
				</p>
			</div>
			<Apply />
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
