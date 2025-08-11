import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
	return axios.get(baseUrl).then((response) => {
		return response.data;
	});
};

const createPerson = (newPerson) => {
	const request = axios.post(baseUrl, newPerson);
	return request.then((response) => response.data);
};

const deletePerson = (id) => {
	return axios.delete(`${baseUrl}/${id}`).then((response) => {
		return response.data;
	});
};

const updatePerson = ({ id, name, phone }) => {
	return axios.put(`${baseUrl}/${id}`, { name, phone }).then((response) => {
		return response.data;
	});
};

export default { getAll, createPerson, deletePerson, updatePerson };
