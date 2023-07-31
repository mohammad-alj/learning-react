function ListGroup() {
	const countries: string[] = [
		'saudi arabia',
		'syria',
		'egypt',
		'united arab emerates',
		'palastine',
	];

	return (
		<>
			<h1>List Group</h1>
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
