const videoState = {
	data: null,
};
const videoReducer = (state = videoState, action) => {
	switch(action.type){
		case "GET_VIDEOS":
		state = Object.assign({}, state, {
			data: action.payload
		});
		console.log(state.data.items);
		break;
	}
	return state;
};

export default videoReducer;