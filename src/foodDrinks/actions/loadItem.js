import { getAll } from '../services/foodApi';

export function load(){
    return function(dispatch){
        getAll().then(food=>{
            let action = { type : 'LOAD', payload : food};
            dispatch(action);
        });
    }
}
