import { save } from '../services/roomApi';

export function selectUser(userData){
	return function(dispatch){
		userData.isSelected = !userData.isSelected;
		save(userData)
			.then(toggledUser => {
				let action = { type : 'UPDATE_USER', payload : toggledUser};
				dispatch(action);
			})
	}
}