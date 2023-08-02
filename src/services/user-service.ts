import apiClient from './api-client';

export interface User {
	name: string;
	id: number;
}

class UserService {
	getAllUsers() {
		const controller = new AbortController();
		const request = apiClient.get<User[]>('/users', {signal: controller.signal});
		return {request, cancel: () => controller.abort()};
	}

	deleteUser(user: User) {
		return apiClient.delete('/users/' + user.id.toString());
	}

	addUser(userName: string) {
		const newUser = {name: userName, id: 0};
		return apiClient.post('/users', {newUser});
	}

	updateUser(user: User) {
		const updatedUser = {name: user.name + '!', id: user.id};
		return apiClient.patch('/users/' + user.id.toString(), {updatedUser});
	}
}

export default new UserService();
