import {useEffect, useState} from 'react';
import './App.css';
import {AxiosError, CanceledError} from './services/api-client';
import userService, {User} from './services/user-service';

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const {request, cancel} = userService.getAll<User>();
		console.log(request);

		request
			.then(res => {
				setUsers(res.data);
				setLoading(false);
			})
			.catch((err: AxiosError) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});

		return cancel;
	}, []);

	const deleteUser = (user: User) => {
		const originalUsers = [...users];
		setUsers(users.filter(u => u.id !== user.id));

		userService.delete(user.id).catch(err => {
			setError(err.message);
			setUsers(originalUsers);
		});
	};

	const addUser = () => {
		const originalUsers = [...users];
		const newUser = {name: 'mohammed', id: 0};
		setUsers([newUser, ...users]);
		userService
			.create<User>(newUser)
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
		setUsers(users.map(u => (u.id === user.id ? {...user, name: user.name + '!'} : u)));
		userService.update<User>(user).catch(err => {
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
