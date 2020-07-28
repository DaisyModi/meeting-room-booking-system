import { save } from '../services/equipmentApi';

export function toggleEquipment(equipmentData){
	return function(dispatch){
		equipmentData.bookMultiUnits = !equipmentData.bookMultiUnits;
		save(equipmentData)
			.then(toggledEquipment => {
				let action = { type : 'UPDATE_EQUIPMENT', payload : toggledEquipment};
				dispatch(action);
			})
	}
}
		