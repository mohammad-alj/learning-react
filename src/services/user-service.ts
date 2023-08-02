import createHttpService from './http-service';

export interface User {
	name: string;
	id: number;
}

export default createHttpService('/users');
