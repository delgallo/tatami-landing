import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Iaxios } from "../utils/Axios"
import SplittedPopup from "../components/popups/SplittedPopup"

const Affiliate = () => {
	const [info, setInfo] = useState({})
	const { name } = useParams()

	useEffect(() => {
		Iaxios.get(`referrals/${name}`)
			.then(res => setInfo(res.data))
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			<SplittedPopup>
				<div>
					<h1 style={{ textAlign: "center", width: "100%" }}>
						{info.name}
					</h1>
					<div className="bill">
						<div>
							<span>Your link</span>
						</div>
						<div>
							<input
								readOnly
								value={`tatami.gg/?affiliate=${info.code}`}
							/>
						</div>
					</div>
					<div className="bill">
						<div>
							<span>Commission</span>
							<span>{info.cut * 100}%</span>
						</div>
						<div>
							<span>Total Earned</span>
							<span>€{info.totalPaid}</span>
						</div>
						<div>
							<span>Number of students</span>
							<span>{info.students?.length}</span>
						</div>
						<div>
							<span>Discount for students</span>
							<span>{info.discount * 100}%</span>
						</div>
					</div>
				</div>
			</SplittedPopup>
		</>
	)
}

export default Affiliate
