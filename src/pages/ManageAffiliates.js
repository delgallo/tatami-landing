import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AdminNav from "../components/AdminNav"
import "../styling/admin.css"
import { Iaxios } from "../utils/Axios"

const ManageAffiliates = () => {
	const [list, setList] = useState([])

	useEffect(() => {
		Iaxios.get("/referrals").then(res => setList(res.data))
	}, [])

	return (
		<div className="admin">
			<AdminNav />
			<div style={{ flexGrow: 1 }}>
				<h2 style={{ padding: "4rem 0 2rem" }}>Affiliates</h2>
				<button className="glass">Create new</button>
				<table>
					<tbody>
						<tr>
							<th>User</th>
							<th>Commition</th>
							<th>Total Revenue</th>
							<th>Owed</th>
						</tr>
						{list.map(a => (
							<tr key={a.name}>
								<td>
									<Link to={a.username}>{a.name}</Link>
								</td>
								<td>{a.cut * 100}%</td>
								<td>€{a.totalRevenue}</td>
								<td>€{a.amountOwed}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default ManageAffiliates
