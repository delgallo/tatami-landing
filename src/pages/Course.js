import Navbar from "../components/Navbar"
import Bottombar from "../components/Bottombar"
import cover from "../assets/azir.png"
import "../styling/background.css"
import "../styling/course.css"
import "../styling/design.css"
import "../styling/syllabus.css"
import { useEffect } from "react"
import TimeWidget from "../components/Time"
import Coach from "../components/Coach"

const Course = () => {

	const content = {
		title: "The complete guide to League of Legends",
		description: "The purpose of this course is to provide players with the fundamental knowledge needed to truly understand the dynamics of the game and be able to improve.\n The onboarding is simple: during the purchase, we will ask you for your email address. A few days before each lesson starts, you will receive an invitation at the email address you gave us.\nThe course will be held on our platform at the time shown down below.",
		coach: {
			name: "Sagittarius",
			img: "https://tatami-static.s3.eu-central-1.amazonaws.com/ava.jpg",
			description: "Sagittarius is a full-time high ELO coach, with many years of competitive and coaching experience. He helps his students improve their performance by identifying their key mistakes and correcting their bad habits. He is currently ranked #1 Lucian in the world,  but can coach all roles and playstyles!"
		},
		syllabus: [
			{
				title: "Think like a pro",
				description: "Every great player starts from a great mindset, but also from settings and map awareness",
				when: "2022-05-30T17:30:00Z"
			},
			{
				title: "Drafting, meta, itemization",
				description: "Learn the gears, champions and runes, build your victory from the start",
				when: "2022-06-01T17:30:00Z"
			},
			{
				title: "Auto-attacks & mechanics pt.1",
				description: "Master the guns, master the game, from attack range to input buffering",
				when: "2022-06-06T17:30:00Z"
			},
			{
				title: "Auto-attacks & mechanics pt.2",
				description: "Master the guns, master the game, from attack range to input buffering",
				when: "2022-06-08T17:30:00Z"
			},
			{
				title: "Windows of opportunity",
				description: "If you had one shot, one opportunity…you don’t wanna miss that",
				when: "2022-06-13T17:30:00Z"
			},
			{
				title: "Wave management & control",
				description: "Freedom is control, start handling the flow of the minion waves",
				when: "2022-06-15T17:30:00Z"
			},
			{
				title: "Map & Macro pt.1",
				description: "Know your battleground and use it to your advantage, from quadrants to tempo",
				when: "2022-06-20T17:30:00Z"
			},
			{
				title: "Map & Macro pt.2",
				description: "Know your battleground and use it to your advantage, from quadrants to tempo",
				when: "2022-06-22T17:30:00Z"
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
				<button className="button-85" style={{margin: 0}}>Join now</button>
			</div>
			<div>
				<div style={{position: "relative"}}>
					<div className="img-background glass"/>
					<img className="course-img" src={cover}/>
				</div>
			</div>
		</div>
		<div className="contents">
			<div className="course-description">{content.description.split('\n').map(str => <p key={str}>{str}</p>)}</div>
			<div className="syllabus">
				{content.syllabus.map(s => (
					<div className="glass" key={s.title}>
						<div>
							<h3>{s.title}</h3>
							<p>{s.description}</p>
						</div>
						<TimeWidget time={new Date(s.when)}/>
					</div>
				))}
			</div>
			<Coach coach={content.coach}/>
		</div>
	<Bottombar/>
	</div>
	)

}

export default Course
