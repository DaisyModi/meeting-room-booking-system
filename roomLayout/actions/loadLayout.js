import { getAll } from '../services/layoutApi';

export function load(){
    return function(dispatch){
        getAll().then(layouts=>{
            let action = { type : 'LOAD', payload : layouts};
            dispatch(action);
        });
    }
}
