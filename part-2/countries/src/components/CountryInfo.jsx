const CountryInfo = ({ country }) => {
	return (
		<>
			<h2>{country.name.common}</h2>
			<p>Capital: {country.capital}</p>
			<p>Population: {country.population}</p>
			<p>Area: {country.area}</p>
			<p>Languages:</p>
			<ul>
				{Object.entries(country.languages).map(([key, value]) => (
					<li key={key}>{value}</li>
				))}
			</ul>
			<img src={country.flags.png} alt={country.name.common} />
		</>
	);
};

export default CountryInfo;
