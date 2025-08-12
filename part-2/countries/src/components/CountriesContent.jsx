import CountryInfo from "../components/CountryInfo";
import WeatherInfo from "../components/WeatherInfo";
import CountryListItem from "../components/CountryListItem";

const CountriesContent = ({ countries, onShowDetails }) => {
	const tooManyMatches = countries.length > 10;
	const singleMatch = countries.length === 1;

	return (
		<>
			{singleMatch ? (
				<>
					<CountryInfo country={countries[0]} />
					<WeatherInfo
						lat={countries[0].latlng[0]}
						lon={countries[0].latlng[1]}
					/>
				</>
			) : tooManyMatches ? (
				<p>Too many matches, please refine your search.</p>
			) : (
				countries.map((country) => (
					<CountryListItem
						key={country.name.official}
						name={country.name.common}
						onShowDetails={() => onShowDetails(country.name.common)}
					/>
				))
			)}
		</>
	);
};

export default CountriesContent;
