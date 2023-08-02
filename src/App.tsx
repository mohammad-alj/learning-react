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

	const deleteUser = (userID: number) => {
		const originalUsers = [...users];
		setUsers(users.filter(u => u.id !== userID));
		axios
			.delete('https://jsonplaceholder.typicode.com/users/' + userID.toString())
			.catch(err => {
				setError(err.message);
				setUsers(originalUsers);
			});
	};

	const addUser = () => {
		const originalUsers = [...users];
		const newUser = {name: 'mohammed', id: 0};
		setUsers([newUser, ...users]);
		axios
			.post('https://jsonplaceholder.typicode.com/users', newUser)
			.then(res => {
				setUsers([res.data, ...users]);
			})
			.catch(err => {
				setError(err.message);
				setUsers(originalUsers);
			});
	};

	const updateUser = (userId: number) => {
		const originalUsers = [...users];
		const newUser = {
			id: userId,
			name: users.filter(u => u.id === u.id)[0].name + '!',
		};
		setUsers(users.map(u => (u.id === userId ? newUser : u)));
		axios
			.patch('https://jsonplaceholder.typicode.com/xusers/' + userId.toString, newUser)
			.catch(err => {
				setError(err.message);
				setUsers(originalUsers);
			});
	};

	return (
		<div>
			{error && <p className='text-danger'>{error}</p>}
			{isLoading && <div className='spinner-border'></div>}

			<button className='btn btn-primary mb-3' onClick={addUser}>
				new user
			</button>

			<ul className='list-group'>
				{users.map(u => (
					<li key={u.id} className='d-flex justify-content-between list-group-item'>
						<p>{u.name}</p>
						<div className='buttons'>
							<button
								className='btn btn-outline-secondary mx-1'
								onClick={() => updateUser(u.id)}
							>
								Update
							</button>
							<button
								className='btn btn-outline-danger '
								onClick={() => deleteUser(u.id)}
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
