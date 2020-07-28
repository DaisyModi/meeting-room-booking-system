import { getAll } from '../services/layoutApi';

export function loadLayout(){
    return function(dispatch){
        getAll().then(layouts=>{
            let action = { type : 'LOAD_LAYOUT', payload : layouts};
            dispatch(action);
        });
    }
}
