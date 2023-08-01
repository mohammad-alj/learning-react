import {useEffect, useRef, useState} from 'react';
import './App.css';
import axios, {AxiosError} from 'axios';

function App() {
	const [users, setUsers] = useState<{name: string; id: number}[]>([]);

	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(res => setUsers(res.data))
			.catch((err: AxiosError) => console.log(err.response?.status));
	}, []);
	return (
		<div>
			<ul className='list-group'>
				{users.map(u => (
					<li key={u.id}>{u.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
