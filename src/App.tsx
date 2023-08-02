import {useEffect, useRef, useState} from 'react';
import './App.css';
import axios, {AxiosError} from 'axios';

interface User {
	name: string;
	id: number;
}

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState('');
	useEffect(() => {
		axios
			.get<User[]>('https://jsonplaceholder.typicode.com/users')
			.then(res => setUsers(res.data))
			.catch((err: AxiosError) => setError(err.message));
	}, []);
	return (
		<div>
			{error && <p className='text-danger'>{error}</p>}
			<ul className='list-group'>
				{users.map(u => (
					<li key={u.id}>{u.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
