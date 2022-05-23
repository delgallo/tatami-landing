import { NavLink } from "react-router-dom"
import "../styling/admin.css"

const AdminNav = () => {
	return (
		<div className="admin-panel">
			<NavLink
				to="affiliates"
				className={isActive => (isActive ? "link-active" : "")}
			>
				Affiliates
			</NavLink>
		</div>
	)
}

export default AdminNav
