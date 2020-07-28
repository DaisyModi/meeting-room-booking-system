import { save } from '../services/equipmentApi';

export function selectEquipment(equipmentData){
	return function(dispatch){
		equipmentData.isSelected = !equipmentData.isSelected;
		save(equipmentData)
			.then(toggledEquipment => {
				let action = { type : 'UPDATE_EQUIPMENT', payload : toggledEquipment};
				dispatch(action);
			})
	}
}