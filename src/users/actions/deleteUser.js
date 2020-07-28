import { remove } from '../services/roomApi';

export function deleteUser(toDelete){
	return function(dispatch){
        remove(toDelete)
            .then(changedUser => {
                let action = { type : 'REMOVE_USER', payload : changedUser};
                dispatch(action);				
            });
	}
}