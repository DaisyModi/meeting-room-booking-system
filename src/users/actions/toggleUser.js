import { save } from '../services/roomApi';

export function toggleUser(userData){
	return function(dispatch){
		userData.status = !userData.status;
		save(userData)
			.then(toggledUser => {
				// console.log(userData);
				let action = { type : 'UPDATE_USER', payload : toggledUser};
				dispatch(action);
			})
	}
}
		