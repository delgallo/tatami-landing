import { combineReducers } from "redux"
import referralReducer from "./referralReducer"

const reducers = combineReducers({
	referral: referralReducer,
})

export default reducers
