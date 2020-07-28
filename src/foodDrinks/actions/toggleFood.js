import { save } from '../services/foodApi';

export function toggleFood(foodData){
	return function(dispatch){
		foodData.isSelected = !foodData.isSelected;
		save(foodData)
			.then(toggledFood => {
				let action = { type : 'UPDATE', payload : toggledFood};
				dispatch(action);
			})
	}
}