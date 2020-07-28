import { save } from '../services/layoutApi';

export function addNew(newLayoutTitle){
	return function(dispatch){
		let newLayoutData = {
			id : 0,
            //image : image,
            title : newLayoutTitle,
            //rooms : rooms
		};
		
		save(newLayoutData)
			.then(newLayout => {
				let action = { type : 'ADD_NEW', payload : newLayout};
				dispatch(action);		
			});
	}
}