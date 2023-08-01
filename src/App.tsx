import {useState} from 'react';

function App() {
	const [game, setGame] = useState({
		id: 1,
		player: {
			name: 'mohammed',
			health: 100,
		},
	});
	return (
		<div>
			<h1>Player name {game.player.name}</h1>
			<button
				onClick={() =>
					setGame({
						...game,
						player: {
							...game.player,
							name: 'abdulrazzak',
						},
					})
				}
			>
				Change name to abdulrazzak
			</button>
		</div>
	);
}

export default App;
