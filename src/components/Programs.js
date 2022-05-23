import { useEffect, useState } from "react"
import Coursebox from "./CourseBox"

const content = [
	{
		title: "The complete guide to League of Legends",
		slug: "lol",
		description:
			"The purpose of this course is to provide players with the fundamental knowledge needed to truly understand the dynamics of the game and be able to improve.\n The onboarding is simple: during the purchase, we will ask you for your email address. A few days before each lesson starts, you will receive an invitation at the email address you gave us.\nThe course will be held on our platform at the time shown down below.",
		thumbnail:
			"https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf06237d0ebbe32e0/5efc23abee48da0f762bc2f2/LOL_PROMOART_4.jpg",
		coach: {
			name: "Sagittarius",
			img: "https://tatami-static.s3.eu-central-1.amazonaws.com/ava.jpg",
		},
	},
]

const Programs = () => {
	const [p, setP] = useState([])

	useEffect(() => {
		setP(content)
	}, [])

	return (
		<div>
			<h1 style={{ textAlign: "center", padding: "10vh 0 5vh" }}>
				Programs
			</h1>

			<div className="course-list">
				{p.map(c => (
					<Coursebox content={c} key={c.title} />
				))}
			</div>
		</div>
	)
}

export default Programs
