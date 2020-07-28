import { save } from '../services/roomApi';

export function toggle(roomData){
	return function(dispatch){

		if(roomData.status === "Active")
			roomData.status = "Inactive";
		else
			roomData.status = "Active";
		console.log("roomData:");
		console.log(roomData);
		save(roomData)
			.then(toggledRoom => {
				let action = { type : 'UPDATE_ROOM', payload : toggledRoom};
				dispatch(action);
			})
	}
}
		