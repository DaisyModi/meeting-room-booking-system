import axios from 'axios';

const serviceEndPoint = 'http://localhost:3030/rooms';

export function getAll(){
	return axios
		.get(serviceEndPoint)
		.then(response => response.data);
}

export function save(roomData){
	if (roomData.id === 0){
		/* it is a new room */
		return axios
			.post(serviceEndPoint, roomData)
			.then(response => response.data);

	} else {
		/* it is an existing room */
		return axios
			.put(`${serviceEndPoint}/${roomData.id}`, roomData)
			.then(response => response.data);
	}
}


// export function remove(roomData){
// 	return axios
// 		.delete(`${serviceEndPoint}/${roomData.id}`)
// 		.then(response => response.data);
// }