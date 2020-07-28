import axios from 'axios';

const serviceEndPoint = 'http://localhost:3030/equipments';

export function getAll(){
	return axios
		.get(serviceEndPoint)
		.then(response => response.data);
}

export function save(equipmentData){
	if (equipmentData.id === 0){
		/* it is a new room */
		return axios
			.post(serviceEndPoint, equipmentData)
			.then(response => response.data);

	} else {
		/* it is an existing room */
		return axios
			.put(`${serviceEndPoint}/${equipmentData.id}`, equipmentData)
			.then(response => response.data);
	}
}

export function remove(equipmentData){
	return axios
		.delete(`${serviceEndPoint}/${equipmentData.id}`)
		.then(response => response.data);
}