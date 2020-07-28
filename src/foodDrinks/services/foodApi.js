import axios from 'axios';

const serviceEndPoint = 'http://localhost:3030/food';

export function getAll(){
	return axios
		.get(serviceEndPoint)
		.then(response => response.data);
}

export function save(foodData){
	if (foodData.id === 0){
		/* it is a new item */
		return axios
			.post(serviceEndPoint, foodData)
			.then(response => response.data);

	} else {
		/* it is an existing item */
		return axios
			.put(`${serviceEndPoint}/${foodData.id}`, foodData)
			.then(response => response.data);
	}
}

export function remove(roomData){
	return axios
	 		.delete(`${serviceEndPoint}/${roomData.id}`)
	.then(response => response.data);
 }