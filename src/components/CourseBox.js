import { Link } from "react-router-dom"
import "../styling/feature.css"

const Coursebox = ({slug}) => {

    const content = {
		title: "The complete guide to League of Legends",
		description: "The purpose of this course is to provide players with the fundamental knowledge needed to truly understand the dynamics of the game and be able to improve.\n The onboarding is simple: during the purchase, we will ask you for your email address. A few days before each lesson starts, you will receive an invitation at the email address you gave us.\nThe course will be held on our platform at the time shown down below.",
        thumbnail: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf06237d0ebbe32e0/5efc23abee48da0f762bc2f2/LOL_PROMOART_4.jpg",
		coach: {
			name: "Sagittarius",
			img: "https://tatami-static.s3.eu-central-1.amazonaws.com/ava.jpg",
		},
    }

	return (
		<Link to={`/${slug}`} className="glass">
			<img src={content.thumbnail}/>
            <div>
                <h3>{content.title}</h3>
				<p>by {content.coach.name}</p>
            </div>
		</Link>
	)
}

export default Coursebox
