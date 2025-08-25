import { SecondTitle } from '@/components/UI/SecondTitle';
import { OrderItem } from '@/components/TransactionItem/OrderItem';
import { Clock, Truck, PackageCheck, XOctagon } from 'lucide-react';
import { useOrdersQuery } from '@/services/api/useOrdersQuery';
import { Order } from '@/components/TransactionItem/types';

const getStatusInfo = (status: string) => {
	switch (status) {
		case 'pending':
			return {
				label: 'Pending',
				icon: <Clock size={18} />,
				color: 'bg-yellow-100 text-yellow-800',
			};
		case 'shipped':
			return {
				label: 'Shipped',
				icon: <Truck size={18} />,
				color: 'bg-blue-100 text-blue-800',
			};
		case 'delivered':
			return {
				label: 'Delivered',
				icon: <PackageCheck size={18} />,
				color: 'bg-green-100 text-green-800',
			};
		case 'cancelled':
			return {
				label: 'Cancelled',
				icon: <XOctagon size={18} />,
				color: 'bg-red-100 text-red-800',
			};
		default:
			return {
				label: 'Unknown',
				icon: null,
				color: 'bg-gray-100 text-gray-800',
			};
	}
};

export function Orders() {
	const { data, isLoading, isError, isPending } = useOrdersQuery();

	if (isLoading || isPending) {
		return (
			<section className='w-full max-w-3xl py-16 mb-12 p-6'>
				<SecondTitle title='My orders' />
				<p className='text-center'>Loading orders...</p>
			</section>
		);
	}

	if (isError) {
		return (
			<section className='w-full max-w-3xl py-16 mb-12 p-6'>
				<SecondTitle title='My orders' />
				<p className='text-red-700 text-center'>
					Error loading orders.
				</p>
			</section>
		);
	}

	const filteredOrders = data.filter(
		(order: Order) => getStatusInfo(order.status).label !== 'Unknown'
	);

	return (
		<section className='w-full max-w-3xl py-16 mb-12 p-6'>
			<SecondTitle title='My orders' />
			{filteredOrders.length === 0 ? (
				<p className='text-pink-700 text-center'>No orders found.</p>
			) : (
				<ul className='flex flex-col gap-5'>
					{filteredOrders.map((order) => {
						const { label, icon, color } = getStatusInfo(
							order.status
						);
						return (
							<OrderItem
								key={order.id}
								order={order}
								statusLabel={label}
								statusIcon={icon}
								statusColor={color}
							/>
						);
					})}
				</ul>
			)}
		</section>
	);
}
