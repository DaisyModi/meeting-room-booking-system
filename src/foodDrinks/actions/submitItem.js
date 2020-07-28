import { getAll } from '../services/foodApi';

export function submit(query){
    return function(dispatch){
        getAll().then(food=>{
            let action = { type : 'SUBMIT', payload : food, query : query };
            dispatch(action);
        });
    }
}
