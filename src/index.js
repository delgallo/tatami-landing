import React from "react"
import ReactDOM from "react-dom/client"
import App from "./pages/App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import Course from "./pages/Course"
import ManageAffiliates from "./pages/ManageAffiliates"
import Affiliate from "./pages/Affiliate"
import { Provider } from "react-redux"
import Store from "./state/Store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<BrowserRouter>
		<Provider store={Store}>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="c/:slug" element={<Course />} />
				<Route path="affiliates" element={<ManageAffiliates />} />
				<Route path="affiliates/:name" element={<Affiliate />} />
			</Routes>
		</Provider>
	</BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
