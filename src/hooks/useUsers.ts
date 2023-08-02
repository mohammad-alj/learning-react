import {useEffect, useState} from 'react';
import userService, {User} from '../services/user-service';
import {AxiosError, CanceledError} from '../services/api-client';

const useUsers = () => {
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
	return {
		users,
		setUsers,
		error,
		setError,
		isLoading,
	};
};

export default useUsers;
