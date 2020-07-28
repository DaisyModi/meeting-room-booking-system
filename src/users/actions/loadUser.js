import { getAll } from '../services/roomApi';

export function loadUser(){
    return function(dispatch){
        getAll().then(users=>{
            let action = { type : 'LOAD_USER', payload : users};
            dispatch(action);
        });
    }
}
