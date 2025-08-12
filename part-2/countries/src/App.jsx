import { useState, useEffect } from "react";

import CountrySearch from "./components/CountrySearch";
import CountriesContent from "./components/CountriesContent";

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

	return (
		<div>
			<CountrySearch value={country} onSearch={(value) => setCountry(value)} />
			<CountriesContent
				countries={filteredCountries}
				onShowDetails={(value) => setCountry(value)}
			/>
			{/* <pre>{JSON.stringify(filteredCountries, null, 2)}</pre> */}
		</div>
	);
};

export default App;
