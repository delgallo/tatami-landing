import "../styling/nav.css"
import "../styling/button.css"
import logo from "../assets/logo.png"
import Apply from "./Apply"

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<img src={logo} alt="logo" />
				<div className="nav-title">Tatami</div>
			</div>
			<Apply/>
		</nav>
	)
}

export default Navbar
