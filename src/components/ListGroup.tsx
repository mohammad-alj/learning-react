import {useState} from 'react';

function ListGroup() {
	const [selectedCountryIndex, setSelectedCountryIndex] = useState(-1);

	const countries: string[] = [
		'saudi arabia',
		'syria',
		'egypt',
		'united arab emerates',
		'palastine',
	];

	const handleClick = (event: React.MouseEvent, index: number) => {
		setSelectedCountryIndex(index);
		console.log(event, `${countries[index]} clicked`);
	};

	return (
		<>
			<h1>Countries</h1>
			{countries.length === 0 && <p>No items found</p>}
			<ul className='list-group'>
				{countries.map((country, index) => (
					<li
						className={
							'list-group-item' + (selectedCountryIndex === index ? ' active' : '')
						}
						key={index}
						onClick={event => handleClick(event, index)}
					>
						{country}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
