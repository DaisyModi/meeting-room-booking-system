import { getAll } from '../services/foodApi';

export function submitFood(query){
    return function(dispatch){
        getAll().then(food=>{
            let action = { type : 'SUBMIT_FOOD', payload : food, query : query };
            dispatch(action);
        });
    }
}
