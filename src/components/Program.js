import "../styling/feature.css"
import Infobox from "./Infobox"
import Apply from "./Apply"

const Program = () => {
	return (
		<div className="feature" id="program">
			<div className="feature-text">
				{/* <div>
					<h1 style={{ textAlign: "center" }}>Academy</h1>
				</div> */}
				<p>
					Introducing the gym of the 21st century: one entirely
					dedicated to gaming. We're partnering with top coaches to
					create a complete experience to master your favourite game.
					<br />
					<br />
					Our method is revolutionary and accessible to everyone. Come
					and join us, you'll be shocked to see what you're truly
					capable of.
				</p>
			</div>

			<Apply />

			<div className="info-list">
				<Infobox
					emoji="⛩️"
					title="Take part in live classes"
					text=" We organize live classes for students of the same level. You will meet new players and train alongside them.
                    "
				/>
				<Infobox
					emoji="🏋️"
					title="Learn from the 0.02%"
					text="We offer 1 to 1 coaching for those who want to boost their performance and climb to the top even faster."
					comingSoon={true}
				/>
				<Infobox
					emoji="🥋"
					title="Get scouted by pros"
					text="Top-ranking players will be observed by a professional scout from an eSport team."
					comingSoon={true}
				/>
			</div>
		</div>
	)
}

export default Program
