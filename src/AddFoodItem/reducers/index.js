function foodItemReducer(currentState = [], action){
	if (action.type === 'save')
	{
		let newItem = action.payload;
		let newState = [...currentState, newItem];
		return newState;
	}
	if (action.type === 'LOAD'){
		return action.payload;
	}
	return currentState;
}
export default foodItemReducer;