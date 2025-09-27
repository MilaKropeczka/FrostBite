'use client';

import { useMemo, useState, useEffect, useCallback } from 'react';

export function useAuth() {
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		setToken(storedToken);
	}, []);

	const isLoggedIn = !!token;
	const userId = token ? token.replace('token-', '') : null;

	const logout = useCallback(() => {
		localStorage.removeItem('token');
		setToken(null);
	}, []);

	return useMemo(
		() => ({
			isLoggedIn,
			token,
			userId,
			logout,
		}),
		[isLoggedIn, token, userId, logout]
	);
}

// 'use client';

// import { useMemo, useState, useEffect, useCallback } from 'react';
// import { logout as apiLogout } from '@/services/api/useLoginMutation';

// export function useAuth() {
// 	const [token, setToken] = useState<string | null>(null);

// 	useEffect(() => {
// 		const getTokenFromCookie = () => {
// 			const cookieValue = document.cookie
// 				.split('; ')
// 				.find((row) => row.startsWith('token='))
// 				?.split('=')[1];
// 			return cookieValue || null;
// 		};

// 		const storedToken = getTokenFromCookie();
// 		setToken(storedToken);
// 	}, []);

// 	const isLoggedIn = !!token;
// 	const userId = token ? token.replace('mocked-jwt-token-', '') : null;

// 	const logout = useCallback(async () => {
// 		try {
// 			await apiLogout();
// 			setToken(null);
// 		} catch (error) {
// 			console.error('Logout error:', error);
// 			document.cookie =
// 				'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
// 			setToken(null);
// 		}
// 	}, []);

// 	return useMemo(
// 		() => ({
// 			isLoggedIn,
// 			token,
// 			userId,
// 			logout,
// 		}),
// 		[isLoggedIn, token, userId, logout]
// 	);
// }
