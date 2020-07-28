import { save } from '../services/equipmentApi';

export function addNewEquipment(newEquipmentName = "", bookMultiUnits = true, price =0, isSelected = false){
	return function(dispatch){
		let newEquipmentData = {
			id: 0,
			title: newEquipmentName,
			bookMultiUnits: bookMultiUnits,
			price: price,
			isSelected : isSelected
		};
		
		save(newEquipmentData)
			.then(newEquipment => {
				let action = { type : 'ADD_NEW_EQUIPMENT', payload : newEquipment};
				dispatch(action);		
			});
	}
}