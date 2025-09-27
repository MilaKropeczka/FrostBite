import { useQuery } from '@tanstack/react-query';
import { getToken } from '@/hooks/useLoginMutation';
import { Order } from '@/components/TransactionItem/types';

export const useOrdersQuery = () => {
	const token = getToken();
	// const token = undefined;
	return useQuery<Order[]>({
		queryKey: ['orders', token],
		queryFn: async () => {
			const res = await fetch('/api/orders', {
				headers: { Authorization: `Bearer ${token}` },
			});
			if (!res.ok) throw new Error('Błąd pobierania zamówień');
			return res.json();
		},
		enabled: !!token,
	});
};

// 'use client';

// import { useQuery } from '@tanstack/react-query';
// import { Order } from '@/components/TransactionItem/types';
// import { getToken } from './useLoginMutation';
// import { cookies } from 'next/headers';

// export async function useOrdersQuery() {
// 	const token = typeof window !== 'undefined' ? getToken() : null;

// 	return useQuery<Order[]>({
// 		queryKey: ['orders', token],
// 		queryFn: async () => {
// 			const res = await fetch('/api/orders', {
// 				headers: { Authorization: `Bearer ${token}` },
// 			});
// 			if (!res.ok) throw new Error('Błąd pobierania zamówień');
// 			return res.json();
// 		},
// 		enabled: !!token,
// 	});
// }
