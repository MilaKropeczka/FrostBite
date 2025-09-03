import { useMemo } from 'react';

export function useAuth() {
	const token = localStorage.getItem('token');

	const isLoggedIn = !!token;
	const userId = token ? token.replace('token-', '') : null;

	const logout = () => {
		localStorage.removeItem('token');
	};

	return useMemo(
		() => ({
			isLoggedIn,
			token,
			userId,
			logout,
		}),
		[isLoggedIn, token, userId]
	);
}
