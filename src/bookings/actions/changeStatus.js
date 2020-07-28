import { save } from '../services/bookingApi';

export function changeStatus(bookingData, changedStatus){
	return function(dispatch){		
		bookingData.status = changedStatus;
		// console.log("received",changedStatus);
		
		save(bookingData)
			.then(changedRoom => {
				let action = { type : 'UPDATE_BOOKINGS', payload : changedRoom};
				dispatch(action);
			})
	}
}
		