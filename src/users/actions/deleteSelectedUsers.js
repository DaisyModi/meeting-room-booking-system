import { remove } from '../services/roomApi';

export function deleteSelectedUsers(){
	return function(dispatch, getState){
        let storeState = getState();
        let users = storeState.userData;
		let selectedUsers = users.filter(user => user.isSelected);
		selectedUsers
			.forEach(selectedUser => {
				remove(selectedUser)
					.then(response => {
						let action = { type : 'REMOVE_USER', payload : selectedUser};
						dispatch(action);				
					})
			})
		
	}
}
