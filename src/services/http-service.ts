import apiClient from './api-client';

class HttpService {
	public readonly endpoint: string;
	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}
	getAll<T>() {
		const controller = new AbortController();
		const request = apiClient.get<T[]>(this.endpoint, {signal: controller.signal});
		return {request, cancel: () => controller.abort()};
	}

	delete(id: number) {
		return apiClient.delete(this.endpoint + '/' + id);
	}

	create<T>(entity: T) {
		return apiClient.post(this.endpoint, entity);
	}

	update<T>(entity: T & {id: number}) {
		return apiClient.patch(this.endpoint + '/' + entity.id, entity);
	}
}

const createHttpService = (endpoint: string) => new HttpService(endpoint);

export default createHttpService;
