import axios from 'axios';

const serviceEndPoint = 'http://localhost:3030/users';

export function getAll(){
	return axios
		.get(serviceEndPoint)
		.then(response => response.data);
}

export function save(userData){
	if (userData.id === 0){
		/* it is a new room */
		return axios
			.post(serviceEndPoint, userData)
			.then(response => response.data);

	} else {
		/* it is an existing room */
		return axios
			.put(`${serviceEndPoint}/${userData.id}`, userData)
			.then(response => response.data);
	}
}

export function remove(userData){
	return axios
		.delete(`${serviceEndPoint}/${userData.id}`)
		.then(response => response.data);
}