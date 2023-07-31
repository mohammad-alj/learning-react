function ListGroup() {
	let countries: string[] = [
		'saudi arabia',
		'syria',
		'egypt',
		'united arab emerates',
		'palastine',
	];

	countries = [];

	return (
		<>
			<h1>Countries</h1>
			{countries.length === 0 && <p>No items found</p>}
			<ul className='list-group'>
				{countries.map(country => (
					<li className='list-group-item' key={country}>
						{country}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
