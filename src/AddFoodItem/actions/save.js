import { save } from '../services/foodApi';

export function saveItem(title, price){
	return function(dispatch){
		let newItem = {
			id:0,
            title: title,
			price: price,
			isSelected: false
		};
		
		save(newItem)
			.then(item => {
				let action = { type : 'save', payload : item};
				dispatch(action);		
			});
			
	}
}