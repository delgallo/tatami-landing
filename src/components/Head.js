import "../styling/arrow.css"
import arrow from "../assets/arrow-down.svg"
import clip from "../assets/clips.mp4"

const Head = () => {
	return (
		<div className="head">
		    <video loop autoPlay muted>
				<source
					src= {clip}
					type="video/mp4"
				/>
        		Your browser does not support the video tag.
      		</video>
			<h1>
				Bringing the eSport ecosystem into your home
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
