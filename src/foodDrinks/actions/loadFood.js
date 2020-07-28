import { getAll } from '../services/foodApi';

export function loadFood(){
    return function(dispatch){
        getAll().then(food=>{
            let action = { type : 'LOAD_FOOD', payload : food};
            dispatch(action);
        });
    }
}
