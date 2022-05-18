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

			<div className="info-list">
				<Infobox
					emoji="⛩️"
					title="Multiplayer Live classes"
					text=" During the lesson, the coach and other players will be in a virtual room with you. We select our coaches from the top 0.02% of ranked players."
				/>
				<Infobox
					emoji="🏋️"
					title="Theory and practice"
					text="The coach will first go over the theory, then assign some drills and check to see if you are actually improving."
				/>
				<Infobox
					emoji="🥋"
					title="Our programs"
					text="Along with our coaches, we designed the ideal improvement plan for you, from the basics down to the smallest details."
				/>
			</div>
		</div>
	)
}

export default Program
