function layoutReducer(currentState = [], action){
	if (action.type === 'ADD_NEW_LAYOUT'){
		let newLayout = action.payload;
		let newState = [...currentState, newLayout]
		return newState;
	}
	if (action.type === 'UPDATE_LAYOUT'){
		let updatedLayout = action.payload;
		let newState = currentState.map(layout => layout.id === updatedLayout.id ? updatedLayout : layout);
		return newState;
	}
	if (action.type === 'REMOVE_ALL_LAYOUT'){
		let layoutsToRemove = action.payload;
		let newState = currentState.filter(layout => layoutsToRemove.indexOf(layout) === -1);
		return newState;
	}
	if (action.type === 'REMOVE_LAYOUT'){
		let layoutToRemove = action.payload;
		let newState = currentState.filter(layout => layout.id !== layoutToRemove.id);
		return newState;
	}
	if (action.type === 'LOAD_LAYOUT'){
		return action.payload;
	}
	return currentState;
}
export default layoutReducer;