import { useState, useEffect } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [filter, setFilter] = useState("");
	const [notificationMessage, setNotificationMessage] = useState(null);

	useEffect(() => {
		personService.getAll().then((initialPersons) => {
			setPersons(initialPersons);
		});
	}, []);

	const handleAddPerson = ({ newName, newPhone }) => {
		const nameExists = persons.some((person) => person.name === newName);

		if (nameExists) {
			handleUpdatePerson({
				id: persons.find((p) => p.name === newName).id,
				name: newName,
				phone: newPhone,
			});
			return;
		}

		const personObject = {
			name: newName,
			phone: newPhone,
		};

		personService
			.createPerson(personObject)
			.then((returnedPerson) => {
				setPersons(persons.concat(returnedPerson));
				setNotificationMessage(`Added ${newName}`);
				setTimeout(() => {
					setNotificationMessage(null);
				}, 5000);
			})
			.catch((error) => {
				alert(`Failed to add ${newName}.`);
			});
	};

	const handleDeletePerson = (id) => {
		const person = persons.find((p) => p.id === id);

		if (window.confirm(`Delete ${person.name}?`)) {
			personService
				.deletePerson(id)
				.then(() => {
					setPersons(persons.filter((person) => person.id !== id));
				})
				.catch((error) => {
					alert(`Failed to delete ${person.name}.`);
				});
		}
	};

	const handleUpdatePerson = ({ id, name, phone }) => {
		if (window.confirm(`Update ${name}'s number to ${phone}?`)) {
			personService
				.updatePerson({ id, name, phone })
				.then((updatedPerson) => {
					setPersons(
						persons.map((person) =>
							person.id === id ? updatedPerson : person,
						),
					);
				})
				.catch((error) => {
					alert(`Failed to update ${person.name}'s number.`);
				});
		}
	};

	const filteredPersons = persons.filter((person) =>
		person.name.toLowerCase().includes(filter.toLowerCase()),
	);

	return (
		<div>
			<h1>Phonebook</h1>
			<Notification message={notificationMessage} />
			<Filter
				filter={filter}
				handleFilterChange={(e) => setFilter(e.target.value)}
			/>
			<h2>Add an new</h2>
			<PersonForm onSubmit={handleAddPerson} />
			<h2>Numbers</h2>
			<Persons persons={filteredPersons} onDelete={handleDeletePerson} />
		</div>
	);
};

export default App;
