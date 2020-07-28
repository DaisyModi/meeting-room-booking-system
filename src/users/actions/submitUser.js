import {getAll} from '../services/roomApi'

export function submitUser(query){
    return function(dispatch){
        getAll().then(user => {
            let action = {type: 'SUBMIT_USER', payload : user, query: query}
            dispatch(action);
        });
    }
}