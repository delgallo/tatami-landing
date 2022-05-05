import "../styling/arrow.css"
import arrow from "../assets/arrow-down.svg"

const Head = () => {
	return (
		<div className="head">
			<video loop autoPlay muted>
				<source
					src="https://tatami-static.s3.eu-central-1.amazonaws.com/Clips.mp4"
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>
			<h1>Designed to make you win more</h1>
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
