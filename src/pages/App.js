import Program from "../components/Program"
import Navbar from "../components/Navbar"
import "../styling/base.css"
import Head from "../components/Head"
import FAQ from "../components/FAQ"
import Bottombar from "../components/Bottombar"

function App() {
	return (
		<>
			<Navbar />
			<Head />
			<Program />
			<FAQ />
			<Bottombar />
		</>
	)
}

export default App
