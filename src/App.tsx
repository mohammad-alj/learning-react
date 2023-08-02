import {useEffect, useState} from 'react';
import './App.css';
import apiClient, {AxiosError, CanceledError} from './services/api-client';

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
		apiClient
			.get<User[]>('/users', {signal: controller.signal})
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

	const deleteUser = (user: User) => {
		const originalUsers = [...users];
		setUsers(users.filter(u => u.id !== user.id));
		apiClient.delete('/users/' + user.id.toString()).catch(err => {
			setError(err.message);
			setUsers(originalUsers);
		});
	};

	const addUser = () => {
		const originalUsers = [...users];
		const newUser = {name: 'mohammed', id: 0};
		setUsers([newUser, ...users]);
		apiClient
			.post('/users', newUser)
			.then(res => {
				setUsers([res.data, ...users]);
			})
			.catch(err => {
				setError(err.message);
				setUsers(originalUsers);
			});
	};

	const updateUser = (user: User) => {
		const originalUsers = [...users];
		const newUser = {
			id: user.id,
			name: user.name + '!',
		};
		setUsers(users.map(u => (u.id === user.id ? newUser : u)));
		apiClient.patch('/users/' + user.toString, newUser).catch(err => {
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
								onClick={() => updateUser(u)}
							>
								Update
							</button>
							<button
								className='btn btn-outline-danger '
								onClick={() => deleteUser(u)}
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
