import { useState, useEffect } from "react";

import { getAllCountries } from "./services/countries";

const App = () => {
	const [country, setCountry] = useState("");
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		getAllCountries().then((countries) => {
			setCountries(countries);
		});
	}, []);

	const handleChange = (event) => {
		setCountry(event.target.value);
	};

	const filteredCountries =
		country === ""
			? []
			: countries.filter((c) =>
					c.name.common.toLowerCase().includes(country.toLowerCase()),
				);

	const tooManyMatches = filteredCountries.length > 10;

	return (
		<div>
			find countries: <input value={country} onChange={handleChange} />
			{country === "" ? null : tooManyMatches ? (
				<p>Too many matches, please refine your search.</p>
			) : (
				filteredCountries.map((country) => (
					<div key={country.name.official}>
						<p>{country.name.common}</p>
					</div>
				))
			)}
			<pre>{JSON.stringify(filteredCountries, null, 2)}</pre>
		</div>
	);
};

export default App;
