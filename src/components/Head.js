import gaming from "../assets/gaming.jpg"
import "../styling/arrow.css"
import arrow from "../assets/arrow-down.svg"

const Head = () => {
	return (
		<div className="head" style={{ backgroundImage: `url(${gaming})` }}>
			<h1>
				All the tools that will make you step up your game in just one
				affordable subscription
			</h1>
			<div
				onClick={() =>
					window.scrollBy({
						top: window.innerHeight,
						behavior: "smooth",
					})
				}
			>
				<span>Discover more</span>
				<img src={arrow} alt="React Logo" className="arrow" />
			</div>
		</div>
	)
}

export default Head
