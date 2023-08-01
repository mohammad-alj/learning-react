import {useState} from 'react';

interface Props {
	listName: string;
	items: string[];
}

function ListGroup(props: Props) {
	const [itemIndex, setItemIndex] = useState(-1);
	const [name, setName] = useState('');

	const handleClick = (index: number) => {
		setName(props.items[index]);
		setItemIndex(index);
	};

	return (
		<>
			<h1>{name ? name : props.listName}</h1>
			{props.items.length === 0 && <p>No items found</p>}
			<ul className='list-group'>
				{props.items.map((item, index) => (
					<li
						className={'list-group-item' + (itemIndex === index ? ' active' : '')}
						key={index}
						onClick={() => handleClick(index)}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
