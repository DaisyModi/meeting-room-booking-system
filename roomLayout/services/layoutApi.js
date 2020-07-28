import axios from 'axios';

const serviceEndPoint = 'http://localhost:3030/layouts';

export function getAll(){
	return axios
		.get(serviceEndPoint)
		.then(response => response.data);
}

export function save(layoutData){
	if (layoutData.id === 0){
		return axios
			.post(serviceEndPoint, layoutData)
			.then(response => response.data);

	} else {
		return axios
			.put(`${serviceEndPoint}/${layoutData.id}`, layoutData)
			.then(response => response.data);
	}
}

export function remove(layoutData){
	return axios
		.delete(`${serviceEndPoint}/${layoutData.id}`)
		.then(response => response.data);
}