import {useState} from 'react';

interface Props {
	children: string;
	maxLength?: number;
}

const ExpandableText = ({children, maxLength = 100}: Props) => {
	if (maxLength < 1) throw new Error('Max length should at least be 1');

	const [hidden, setHidden] = useState(children.length > maxLength);

	// now here we check the state
	return hidden ? (
		<p>
			{children.substring(0, maxLength)}
			<button onClick={() => setHidden(false)}>show more</button>
		</p>
	) : (
		<p>
			{children}
			{children.length > maxLength && (
				<button onClick={() => setHidden(true)}>show less</button>
			)}
		</p>
	);
};

export default ExpandableText;
