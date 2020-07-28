import { save } from '../services/bookingApi';

export function addBooking(roomName, start_date, end_date, subTotal, status, attendees, paymentMethod, layoutName,
	 								client){
	return function(dispatch){
		let newBookingData = {
			id : 0,
			roomName:roomName,
            start_date : start_date,
            end_date : end_date,
            subTotal : subTotal,
			status : status,
			attendees : attendees,
			paymentMethod : paymentMethod,
			layoutName : layoutName,
			client : client
		};
		save(newBookingData)
			.then(newBooking => {
				let action = { type : 'ADD_NEW_BOOKINGS', payload : newBooking};
				dispatch(action);		
			});
	}
}