import { save } from '../services/foodApi';

export function changeFood(foodData){
	return function(dispatch){
		save(foodData)
			.then(changedFood => {
				let action = { type : 'UPDATE', payload : changedFood};
				dispatch(action);
			})
	}
}