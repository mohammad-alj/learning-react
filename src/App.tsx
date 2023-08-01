import {useState} from 'react';
import './app.css';
import Like from './components/Like';

function App() {
	const [isLiked, setIsLiked] = useState(false);

	return (
		<>
			<Like
				onClick={() => {
					const invert = !isLiked;
					setIsLiked(invert);
					const message = invert ? 'liked' : 'remove like';
					console.log(message);
				}}
				size={25}
			/>
		</>
	);
}

export default App;
