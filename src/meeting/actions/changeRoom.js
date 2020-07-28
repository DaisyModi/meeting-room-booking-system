import { save } from '../services/roomApi';

export function changeRoom(roomData){
	return function(dispatch){
		//roomData.status = !roomData.status;
		console.log("roomData:");
		console.log(roomData);
		save(roomData)
			.then(changedRoom => {
				let action = { type : 'UPDATE', payload : changedRoom};
				dispatch(action);
			})
	}
}
	