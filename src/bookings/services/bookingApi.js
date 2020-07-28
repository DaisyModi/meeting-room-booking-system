import axios from 'axios';

const serviceEndPointBooking = 'http://localhost:3030/bookings';

export function getAll(){
	return axios
		.get(serviceEndPointBooking)
		.then(response => response.data);
}

export function save(bookingData){
	if (bookingData.id === 0){
		/* it is a new room */
		return axios
			.post(serviceEndPointBooking, bookingData)
			.then(response => response.data);

	} else {
		/* it is an existing room */
		return axios
			.put(`${serviceEndPointBooking}/${bookingData.id}`, bookingData)
			.then(response => response.data);
	}
}

// export function remove(roomData){
// 	return axios
// 		.delete(`${serviceEndPointBooking}/${roomData.id}`)
// 		.then(response => response.data);
// }