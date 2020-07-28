function layoutReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		let newLayout = action.payload;
		let newState = [...currentState, newLayout]
		return newState;
	}
	if (action.type === 'UPDATE'){
		let updatedLayout = action.payload;
		let newState = currentState.map(layout => layout.id === updatedLayout.id ? updatedLayout : layout);
		return newState;
	}
	if (action.type === 'REMOVE_ALL'){
		let layoutsToRemove = action.payload;
		let newState = currentState.filter(layout => layoutsToRemove.indexOf(layout) === -1);
		return newState;
	}
	if (action.type === 'REMOVE'){
		let layoutToRemove = action.payload;
		let newState = currentState.filter(layout => layout.id !== layoutToRemove.id);
		return newState;
	}
	if (action.type === 'LOAD'){
		return action.payload;
	}
	return currentState;
}
export default layoutReducer;