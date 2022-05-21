import axios from "axios"

export const Iaxios = axios.create({
	baseURL: process.env.REACT_APP_TEST
		? "http://localhost:6969"
		: "https://api.tatami.gg",
})
