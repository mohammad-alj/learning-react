import {useState} from 'react';

function ListGroup() {
	const [selectedCountryIndex, setSelectedCountryIndex] = useState(-1);
	const [name, setName] = useState('');

	const countries: string[] = [
		'saudi arabia',
		'syria',
		'egypt',
		'united arab emerates',
		'palastine',
	];

	const handleClick = (index: number) => {
		setName(countries[index]);
		setSelectedCountryIndex(index);
	};

	return (
		<>
			<h1>{name ? name : 'Countries'}</h1>
			{countries.length === 0 && <p>No items found</p>}
			<ul className='list-group'>
				{countries.map((country, index) => (
					<li
						className={
							'list-group-item' + (selectedCountryIndex === index ? ' active' : '')
						}
						key={index}
						onClick={() => handleClick(index)}
					>
						{country}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
