import { useState, useEffect } from "react";

import CountrySearch from "./components/CountrySearch";
import CountryInfo from "./components/CountryInfo";
import WeatherInfo from "./components/WeatherInfo";

import { getAllCountries } from "./services/countries";

const App = () => {
	const [country, setCountry] = useState("");
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		getAllCountries().then((countries) => {
			setCountries(countries);
		});
	}, []);

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
			<CountrySearch value={country} onSearch={(value) => setCountry(value)} />
			{singleMatch ? (
				<>
					<CountryInfo country={filteredCountries[0]} />
					<WeatherInfo
						lat={filteredCountries[0].latlng[0]}
						lon={filteredCountries[0].latlng[1]}
					/>
				</>
			) : tooManyMatches ? (
				<p>Too many matches, please refine your search.</p>
			) : (
				filteredCountries.map((country) => (
					<div key={country.name.official}>
						<p>{country.name.common}</p>
						<button
							type="button"
							onClick={() => setCountry(country.name.common)}
						>
							Show Details
						</button>
					</div>
				))
			)}
			<pre>{JSON.stringify(filteredCountries, null, 2)}</pre>
		</div>
	);
};

export default App;
