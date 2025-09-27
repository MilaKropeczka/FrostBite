import axios from 'axios';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

type LoginParams = { email: string; password: string };
type LoginResponse = { token: string };

const login = async ({
	email,
	password,
}: LoginParams): Promise<LoginResponse> => {
	const response = await axios.post('/api/login', { email, password });
	localStorage.setItem('token', response.data.token);
	return response.data;
};

export const useLoginMutation = (
	options?: UseMutationOptions<LoginResponse, Error, LoginParams>
) => {
	return useMutation<LoginResponse, Error, LoginParams>({
		mutationFn: login,
		...options,
	});
};

export const getToken = () => localStorage.getItem('token');

// import axios from 'axios';
// import { useMutation, UseMutationOptions } from '@tanstack/react-query';

// type LoginParams = { email: string; password: string };
// type LoginResponse = { token: string };

// const login = async ({
// 	email,
// 	password,
// }: LoginParams): Promise<LoginResponse> => {
// 	const response = await axios.post('/api/login', { email, password });
// 	return response.data;
// };

// export const useLoginMutation = (
// 	options?: UseMutationOptions<LoginResponse, Error, LoginParams>
// ) => {
// 	return useMutation<LoginResponse, Error, LoginParams>({
// 		mutationFn: login,
// 		...options,
// 	});
// };

// export const logout = async (): Promise<void> => {
// 	await axios.delete('/api/login');
// };
