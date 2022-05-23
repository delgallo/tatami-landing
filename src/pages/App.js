import Program from "../components/Program"
import Navbar from "../components/Navbar"
import "../styling/base.css"
import Head from "../components/Head"
import FAQ from "../components/FAQ"
import Bottombar from "../components/Bottombar"
import Programs from "../components/Programs"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../state/index"

function App() {
	const dispatch = useDispatch()
	const { setReferral } = bindActionCreators(actionCreators, dispatch)

	useEffect(() => {
		window.scrollTo(0, 0)
		const params = new URLSearchParams(window.location.search)
		setReferral(params.get("affiliate"))
	}, [])

	return (
		<>
			<Navbar />
			<Head />
			<div className="contents">
				<Program />
				<Programs />
				<FAQ />
			</div>
			<Bottombar />
		</>
	)
}

export default App
