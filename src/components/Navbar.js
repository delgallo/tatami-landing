import "../styling/nav.css"
import "../styling/button.css"
import { PopupButton } from "@typeform/embed-react"
import logo from "../assets/logo.png"

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<img src={logo} alt="logo" />
				<div className="nav-title">Tatami</div>
			</div>
			<PopupButton id="kKo6RYeF" className="button-85" onClick={() => window.fbq('trackCustom', 'clicked_apply')}>
				Apply
			</PopupButton>
		</nav>
	)
}

export default Navbar
