import Program from "../components/Program"
import Navbar from "../components/Navbar"
import "../styling/base.css"
import Head from "../components/Head"
import FAQ from "../components/FAQ"
import Bottombar from "../components/Bottombar"
import Programs from "../components/Programs"
import { useEffect } from "react"

function App() {
	
	useEffect(() => window.scrollTo(0, 0), [])

	return (
		<>
			<Navbar />
			<Head />
			<div className="contents">
				<Program />
				<Programs/>
				<FAQ />
			</div>
			<Bottombar />
		</>
	)
}

export default App
