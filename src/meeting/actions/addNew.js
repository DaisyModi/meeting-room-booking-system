import { save } from '../services/roomApi';

export function addNew(newRoomName, capacity, bookings , status = "Active"){
	console.log("i am ");
	return function(dispatch){
		let newRoomData = {
			id : 0,
            name : newRoomName,
            capacity : capacity,
            bookings : bookings,
            status : status
		};
		save(newRoomData)
			.then(newRoom => {
				let action = { type : 'ADD_NEW_ROOM', payload : newRoom};
				dispatch(action);		
			});
	}
}