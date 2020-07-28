function roomReducer(currentState = [], action){
	if (action.type === 'ADD_NEW_ROOM'){
		let newRoom = action.payload;
		let newState = [...currentState, newRoom]
		return newState;
	}
	if (action.type === 'UPDATE_ROOM'){
		let updatedRoom = action.payload;
		let newState = currentState.map(room => room.id === updatedRoom.id ? updatedRoom : room);
		return newState;
	}
	if (action.type === 'LOAD_ROOM'){
		return action.payload;
	}
	return currentState;
}
export default roomReducer;