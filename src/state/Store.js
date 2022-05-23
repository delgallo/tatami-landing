import { configureStore } from "@reduxjs/toolkit"
import reducers from "./reducer"

const Store = configureStore({
	reducer: reducers,
	preloadedState: { referral: "" },
})

export default Store
