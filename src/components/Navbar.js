import "../styling/nav.css"
import "../styling/button.css"
import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/logo.png"
import Apply from "./Apply"

const Navbar = () => {

	const location = useLocation()

	return (
		<nav>
			<Link to={{pathname: "/"}} className="logo">
				<img src={logo} alt="logo" />
				<div className="nav-title">Tatami</div>
			</Link>
			{ location.pathname === "/" && <Apply/> }
		</nav>
	)
}

export default Navbar
