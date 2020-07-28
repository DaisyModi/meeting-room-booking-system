import { remove } from '../services/foodApi';

export function deleteSelectedFood(){
	return function(dispatch, getState){
        let storeState = getState();
        let food = storeState.foodData;
		let selectedFood = food.filter(food => food.isSelected);
		selectedFood
			.forEach(selectedFood => {
				remove(selectedFood)
					.then(response => {
						let action = { type : 'REMOVE_SELECTED_FOOD', payload : selectedFood};
						dispatch(action);				
					})
			})
		
	}
}