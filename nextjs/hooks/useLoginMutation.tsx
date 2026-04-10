import axios from 'axios';
import {
	useMutation,
	UseMutationOptions,
	useQueryClient,
} from '@tanstack/react-query';
import { useAuth } from '../providers/AuthProvider';
import { useRouter } from 'next/navigation';
import { QueryClient } from '@tanstack/react-query';

type LoginParams = { email: string; password: string };

type LoginResponse = {
	message: string;
	user: {
		id: string;
		email: string;
		role: string;
	};
};

const loginMutation = async ({
	email,
	password,
}: LoginParams): Promise<LoginResponse> => {
	const response = await axios.post('/api/login', { email, password });
	return response.data;
};

export const useLoginMutation = (
	options?: UseMutationOptions<LoginResponse, Error, LoginParams, unknown>,
) => {
	const { login } = useAuth();
	const router = useRouter();

	return useMutation<LoginResponse, Error, LoginParams, unknown>({
		mutationFn: loginMutation,
		onSuccess: (data, variables, onMutateResult, context) => {
			login(data.user);
			router.push('/');
			options?.onSuccess?.(data, variables, onMutateResult, context);
		},
	});
};
