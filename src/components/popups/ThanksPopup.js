import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Thanks = () => {
	const navigate = useNavigate()

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}
			>
				<div>
					<h1 style={{ textAlign: "center", margin: "1em auto" }}>
						Thank you!
					</h1>
					<p style={{ maxWidth: "600px", margin: "0 auto" }}>
						Howdy! we are happy that you want to be part of the
						Tatami family. You will receive an email invitation a
						few days before each lesson begins :)
					</p>
				</div>

				<button
					className="dashing-button"
					onClick={() => navigate("/")}
				>
					Sounds good
				</button>
			</div>
		</>
	)
}

export default Thanks
