import { Link } from "react-router-dom"
import "../styling/feature.css"

const Coursebox = ({ content }) => {
	return (
		<Link to={`c/${content.slug}`} className="glass">
			<img src={content.thumbnail} />
			<div>
				<h3>{content.title}</h3>
				<p>by {content.coach.name}</p>
			</div>
		</Link>
	)
}

export default Coursebox
