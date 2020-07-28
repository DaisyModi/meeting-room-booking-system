import { getAll } from '../services/roomApi';

export function inactiveUsers(){
    return function(dispatch){
        getAll().then(rooms=>{
            let action = { type : 'INACTIVE_USERS', payload : rooms};
            dispatch(action);
        });
    }
}