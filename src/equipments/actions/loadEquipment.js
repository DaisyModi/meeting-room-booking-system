import { getAll } from '../services/equipmentApi';

export function loadEquipment(){
    return function(dispatch){
        getAll().then(equipments=>{
            let action = { type : 'LOAD_EQUIPMENT', payload : equipments};
            dispatch(action);
        });
    }
}
