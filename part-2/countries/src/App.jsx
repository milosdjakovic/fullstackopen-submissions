import { useState, useEffect } from "react";

import { getAllCountries } from "./services/countries";

const App = () => {
	const [country, setCountry] = useState(null);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		getAllCountries().then((countries) => {
			setCountries(countries);
		});
	}, []);

	const handleChange = (event) => {
		setCountry(event.target.value);
	};

	const filteredCountries = country
		? countries.filter((c) =>
				c.name.common.toLowerCase().includes(country.toLowerCase()),
			)
		: [];

	return (
		<div>
			find countries: <input value={country} onChange={handleChange} />
			<pre>{JSON.stringify(filteredCountries, null, 2)}</pre>
		</div>
	);
};

export default App;
