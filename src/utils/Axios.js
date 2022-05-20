import axios from "axios"
const TEST = true

export const Iaxios = axios.create({baseURL: TEST ? "http://localhost:6969" : "https://api.tatami.gg"})