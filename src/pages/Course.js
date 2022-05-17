import Navbar from "../components/Navbar"
import Bottombar from "../components/Bottombar"
import cover from "../assets/azir.png"
import "../styling/background.css"
import "../styling/course.css"
import "../styling/design.css"
import "../styling/syllabus.css"
import { useEffect } from "react"
import TimeWidget from "../components/Time"

const Course = () => {

	const content = {
		title: "The complete guide to League of Legends",
		description: "The purpose of this course is to provide players with the fundamental knowledge needed to truly understand the dynamics of the game and be able to improve.\n The onboarding is simple: during the purchase, we will ask you for your email address. A few days before each lesson starts, you will receive an invitation at the email address you gave us.\nThe course will be held on our platform at the time shown down below.",
		coach: {
			name: "Sagittarius",
			img: "https://yt3.ggpht.com/ytc/AKedOLQ5cCisFjTr9IVRCN3a5IsExBPJO6iJ1MU4PUvMtg=s900-c-k-c0x00ffffff-no-rj",
		},
		syllabus: [
			{
				title: "Think like a pro",
				description: "Every great player starts from a great mindset, but also from settings and map awareness",
				when: "2022-05-14T19:47:01+0000"
			},
			{
				title: "Drafting, meta, itemization",
				description: "Learn the gears, champions and runes, build your victory from the start",
				when: "2022-05-14T19:47:01+0000"
			},
			{
				title: "Auto-attacks & mechanics pt.1",
				description: "Master the guns, master the game, from attack range to input buffering",
				when: "2022-05-14T19:47:01+0000"
			},
			{
				title: "Auto-attacks & mechanics pt.2",
				description: "Master the guns, master the game, from attack range to input buffering",
				when: "2022-05-14T19:47:01+0000"
			},
			{
				title: "Windows of opportunity",
				description: "If you had one shot, one opportunity…you don’t wanna miss that",
				when: "2022-05-14T19:47:01+0000"
			},
			{
				title: "Wave management & control",
				description: "Freedom is control, start handling the flow of the minion waves",
				when: "2022-05-14T19:47:01+0000"
			},
			{
				title: "Map & Macro pt.1",
				description: "Know your battleground and use it to your advantage, from quadrants to tempo",
				when: "2022-05-14T19:47:01+0000"
			},
			{
				title: "Map & Macro pt.2",
				description: "Know your battleground and use it to your advantage, from quadrants to tempo",
				when: "2022-05-14T19:47:01+0000"
			}
		]
	}

	return(
	<div className="background">
		<Navbar/>
		<div className="course-header">
			<div>
				<h1>
					{content.title}
				</h1>
				<button className="button-85">Join now</button>
			</div>
			<div>
				<div style={{position: "relative"}}>
					<div className="img-background glass"/>
					<img className="course-img" src={cover}/>
				</div>
			</div>
		</div>
		<div className="course-description">{content.description.split('\n').map(str => <p>{str}</p>)}</div>
		<div className="coach glass">
			<img src={content.coach.img}/>
			<p>by {content.coach.name}</p>
		</div>
		<div className="syllabus">
			{content.syllabus.map(s => (
				<div className="glass" key={s.title}>
					<div>
						<h3>{s.title}</h3>
						<p>{s.description}</p>
					</div>
					<TimeWidget time={s.when}/>
				</div>
			))}
		</div>
	<Bottombar/>
	</div>
	)

}

export default Course
