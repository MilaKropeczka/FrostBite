import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/providers/AuthProvider';
import { Order } from '@/components/TransactionItem/types';

export const useOrdersQuery = () => {
	const { isLoggedIn } = useAuth();

	return useQuery<Order[]>({
		queryKey: ['orders'],
		queryFn: async () => {
			const res = await fetch('/api/orders');
			if (!res.ok) throw new Error('Błąd pobierania zamówień');
			return res.json();
		},
		enabled: isLoggedIn,
	});
};
