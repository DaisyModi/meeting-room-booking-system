import { getAll } from '../services/roomApi';

export function loadRooms(){
    return function(dispatch){
        getAll().then(rooms=>{
            let action = { type : 'LOAD_ROOM', payload : rooms};
            dispatch(action);
        });
    }
}
