import "../styling/nav.css"
import "../styling/button.css"
import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"

const Navbar = () => {
	const location = useLocation()

	return (
		<nav>
			<Link to={{ pathname: "/" }} className="logo">
				<img src={logo} alt="logo" />
				<div className="nav-title">tatami</div>
			</Link>
		</nav>
	)
}

export default Navbar
