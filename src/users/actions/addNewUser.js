import { save } from '../services/roomApi';

export function addNewUser(newRole = "admin", newEmail = "", newPass ="", newUserName = "", newPhone = 0, newStatus = true, isSelected = false){
	return function(dispatch){
		let newUserData = {
			id: 0,
			role: newRole,
			email: newEmail,
			password: newPass,
			name : newUserName,
			phone : newPhone,
			status : newStatus,
			isSelected : isSelected,
			createdAt : new Date()
		};
		
		save(newUserData)
			.then(newUser => {
				let action = { type : 'ADD_NEW_USER', payload : newUser};
				dispatch(action);		
			});
	}
}