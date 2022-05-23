const referralReducer = (state = "", action) => {
	switch (action.type) {
		case "set":
			return action.payload
		case "empty":
			return ""
		default:
			return state
	}
}

export default referralReducer
