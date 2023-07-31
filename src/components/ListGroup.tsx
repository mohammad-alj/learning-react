function ListGroup() {
	const countries: string[] = [
		'saudi arabia',
		'syria',
		'egypt',
		'united arab emerates',
		'palastine',
	];

	const handleClick = (event: React.MouseEvent, country: string) =>
		console.log(event, `${country} clicked`);

	return (
		<>
			<h1>Countries</h1>
			{countries.length === 0 && <p>No items found</p>}
			<ul className='list-group'>
				{countries.map((country, index) => (
					<li
						className='list-group-item'
						key={index}
						onClick={event => handleClick(event, country)}
					>
						{country}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
