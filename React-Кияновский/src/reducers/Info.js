const initialState = {
	user: "React-Redux is work!",
	name: "REDUX",
	year: 2018
};

function userInfo(state = initialState, action) {
	switch (action.type) {
		case "SET_YEAR":
			return {...state, year: action.payload }
		default:
			return state;
	}
	return state;
}

export default userInfo;