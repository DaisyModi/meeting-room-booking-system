function userReducer(currentState = [], action){
	if(action.type ==='SUBMIT_USER'){
		console.log(action.query);
		return action.payload.filter(user=>user.name.match(action.query));
	}
	if (action.type === 'ADD_NEW_USER'){
		let newUser = action.payload;
		let newState = [...currentState, newUser]
		return newState;
	}
	if (action.type === 'UPDATE_USER'){
		let updatedUser = action.payload;
		let newState = currentState.map(user => user.id === updatedUser.id ? updatedUser : user);
		return newState;
	}
	if (action.type === 'LOAD_USER'){
		return action.payload;
	}

	if(action.type==='ACTIVE_USERS')
	{
		return action.payload.filter(user => user.status === true);
	}
	if(action.type==='INACTIVE_USERS')
	{
		return action.payload.filter(user => user.status === false);
	}

	if(action.type === 'REMOVE_USER'){
		let userToRemove = action.payload;
		let newState = currentState.filter(user => user.id != userToRemove.id);
		return newState;
	}
	return currentState;
}
export default userReducer;