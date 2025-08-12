const CountrySearch = ({ value, onSearch }) => {
	return (
		<div>
			find countries:
			<input value={value} onChange={(e) => onSearch(e.target.value)} />
			<button type="button" onClick={() => onSearch("")}>
				Clear
			</button>
		</div>
	);
};

export default CountrySearch;
