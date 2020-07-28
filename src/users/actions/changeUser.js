import {save} from '../services/roomApi';

export function changeUser(userData){
    return function(dispatch){
        save(userData).then(changedUser=>{
            let action = {type : 'UPDATE_USER', payload: changedUser};
            dispatch(action);
        });
    }
}