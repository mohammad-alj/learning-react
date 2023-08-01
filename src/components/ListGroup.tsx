import {useState} from 'react';

interface Props {
	heading: string;
	items: string[];
	onSelectItem: (item: string) => void;
}

function ListGroup({heading, items, onSelectItem}: Props) {
	const [itemIndex, setItemIndex] = useState(-1);

	const handleClick = (index: number) => {
		setItemIndex(index);
	};

	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No items found</p>}
			<ul className='list-group'>
				{items.map((item, index) => (
					<li
						className={'list-group-item' + (itemIndex === index ? ' active' : '')}
						key={index}
						onClick={() => {
							handleClick(index);
							onSelectItem(items[index]);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
