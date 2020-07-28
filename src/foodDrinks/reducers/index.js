function foodReducer(currentState = [], action){
	if (action.type === 'SUBMIT'){
		console.log(action.query);
		return action.payload.filter(l=>l.title.match(action.query));
	}
	if (action.type === 'UPDATE'){
		let updatedFood = action.payload;
		let newState = currentState.map(food => food.id === updatedFood.id ? updatedFood : food);
		return newState;
	}
	if(action.type === 'LOAD'){
		return action.payload;
	}
	if (action.type === 'DELETE'){
		let deletedFood = action.payload;
		let newState = currentState.filter(food => food.id !== deletedFood.id);
		return newState;
	}
	if(action.type === 'REMOVE_SELECTED'){
		let removedFood = action.payload;
		let newState = currentState.filter(food => food.id !== removedFood.id);
		return newState;
	}
	return currentState;
}
export default foodReducer;