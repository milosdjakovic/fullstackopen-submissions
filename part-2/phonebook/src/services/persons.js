import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
	return axios.get(baseUrl).then((response) => {
		return response.data;
	});
};

const create = (newPerson) => {
	const request = axios.post(baseUrl, newPerson);
	return request.then((response) => response.data);
};

export default { getAll, create };
