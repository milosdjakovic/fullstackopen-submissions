const CountryListItem = ({ name, onShowDetails }) => {
	return (
		<p>
			{name}
			<button type="button" onClick={onShowDetails}>
				Show Details
			</button>
		</p>
	);
};

export default CountryListItem;
