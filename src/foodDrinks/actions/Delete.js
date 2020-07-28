import { remove } from '../services/foodApi';

export function Delete(foodData){
	return function(dispatch){
		remove(foodData)
			.then(changedFood => {
				let action = { type : 'DELETE', payload : changedFood};
				dispatch(action);
			})
	}
}