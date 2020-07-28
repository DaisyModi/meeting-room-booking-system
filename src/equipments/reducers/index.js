function equipmentReducer(currentState = [], action){
	if (action.type === 'ADD_NEW_EQUIPMENT'){
		let newEquipment = action.payload;
		let newState = [...currentState, newEquipment]
		return newState;
	}
	if (action.type === 'UPDATE_EQUIPMENT'){
		let updatedEquipment = action.payload;
		let newState = currentState.map(equipment => equipment.id === updatedEquipment.id ? updatedEquipment : equipment);
		return newState;
	}
	if (action.type === 'LOAD_EQUIPMENT'){
		return action.payload;
	}
	if(action.type === 'REMOVE_EQUIPMENT'){
		let equipmentToRemove = action.payload;
		let newState = currentState.filter(equipment => equipment.id != equipmentToRemove.id);
		return newState;
	}
	return currentState;
}
export default equipmentReducer;