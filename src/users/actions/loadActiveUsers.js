import { getAll } from '../services/roomApi';

export function activeUsers(){
    return function(dispatch){
        getAll().then(rooms=>{
            let action = { type : 'ACTIVE_USERS', payload : rooms};
            dispatch(action);
        });
    }
}