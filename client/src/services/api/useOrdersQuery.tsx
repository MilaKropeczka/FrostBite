import { useQuery } from '@tanstack/react-query';
import { getToken } from './useLoginMutation';
import { Order } from '@/components/TransactionItem/types';

export const useOrdersQuery = () => {
	const token = getToken();
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
