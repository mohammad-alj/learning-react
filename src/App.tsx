import {useEffect, useRef, useState} from 'react';
import './App.css';
import axios, {AxiosError, CanceledError} from 'axios';

interface User {
	name: string;
	id: number;
}

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setLoading(true);
		axios
			.get<User[]>('https://jsonplaceholder.typicode.com/users', {signal: controller.signal})
			.then(res => {
				setUsers(res.data);
				setLoading(false);
			})
			.catch((err: AxiosError) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});
		return () => controller.abort('User navigated away.');
	}, []);

	return (
		<div>
			{error && <p className='text-danger'>{error}</p>}
			{isLoading && <div className='spinner-border'></div>}
			<ul className='list-group'>
				{users.map(u => (
					<li key={u.id}>{u.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
