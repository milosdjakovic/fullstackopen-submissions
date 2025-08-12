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
	const singleMatch = filteredCountries.length === 1;

	return (
		<div>
			find countries: <input value={country} onChange={handleChange} />
			{singleMatch ? (
				<div>
					<h2>{filteredCountries[0].name.common}</h2>
					<p>Capital: {filteredCountries[0].capital}</p>
					<p>Population: {filteredCountries[0].population}</p>
					<ul>
						{Object.entries(filteredCountries[0].languages).map(
							([key, value]) => (
								<li key={key}>{value}</li>
							),
						)}
					</ul>
					<img
						src={filteredCountries[0].flags.png}
						alt={filteredCountries[0].name.common}
					/>
				</div>
			) : tooManyMatches ? (
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
