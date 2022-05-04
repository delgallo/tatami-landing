import "../styling/nav.css"
import "../styling/button.css"
import { useLocation } from 'react-router-dom'
import logo from "../assets/logo.png"
import Apply from "./Apply"

const Navbar = () => {

	const location = useLocation()

	return (
		<nav>
			<div className="logo">
				<img src={logo} alt="logo" />
				<div className="nav-title">Tatami</div>
			</div>
			{ location.pathname === "/" && <Apply/> }
		</nav>
	)
}

export default Navbar
