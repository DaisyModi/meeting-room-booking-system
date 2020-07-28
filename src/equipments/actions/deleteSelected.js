import { remove } from '../services/equipmentApi';

export function deleteSelectedEquipment(){
	return function(dispatch, getState){
        let storeState = getState();
        let equipments = storeState.equipmentData;
		let selectedEquipments = equipments.filter(equipment => equipment.isSelected);
		selectedEquipments
			.forEach(selectedEquipment => {
				remove(selectedEquipment)
					.then(response => {
						let action = { type : 'REMOVE_EQUIPMENT', payload : selectedEquipment};
						dispatch(action);				
					})
			})
		
	}
}
