import { remove } from '../services/foodApi';

export function deleteFood(foodData){
	return function(dispatch){
		remove(foodData)
			.then(changedFood => {
				let action = { type : 'DELETE_FOOD', payload : changedFood};
				dispatch(action);
			})
	}
}