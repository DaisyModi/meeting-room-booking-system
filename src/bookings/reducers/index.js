function bookingReducer(currentState = [], action){
	if (action.type === 'ADD_NEW_BOOKINGS'){
		let newBooking = action.payload;
		let newState = [...currentState, newBooking]
		return newState;
	}
	if (action.type === 'UPDATE_BOOKINGS'){
		let updatedBooking = action.payload;
		let newState = currentState.map(booking => booking.id === updatedBooking.id ? updatedBooking : booking);
		return newState;
	}
	if (action.type === 'LOAD_BOOKINGS'){
		return action.payload;
	}
	return currentState;
}
export default bookingReducer;