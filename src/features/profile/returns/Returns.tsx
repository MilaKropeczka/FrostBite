import { SecondTitle } from '@/components/UI/SecondTitle';
import { OrderItem } from '@/components/TransactionItem/OrderItem';
import { Clock, XOctagon, PackageCheck } from 'lucide-react';
import { useOrdersQuery } from '@/services/api/useOrdersQuery';
import { Order } from '@/components/TransactionItem/types';

const getReturnStatusInfo = (status: string) => {
	switch (status) {
		case 'requested':
			return {
				label: 'Requested',
				icon: <Clock size={18} />,
				color: 'bg-yellow-100 text-yellow-800',
			};
		case 'approved':
			return {
				label: 'Approved',
				icon: <PackageCheck size={18} />,
				color: 'bg-blue-100 text-blue-800',
			};
		case 'rejected':
			return {
				label: 'Rejected',
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

export function Returns() {
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

	const filteredReturns = data.filter(
		(ret: Order) => getReturnStatusInfo(ret.status).label !== 'Unknown'
	);

	return (
		<section className='w-full max-w-3xl py-16 mb-12 p-6'>
			<SecondTitle title='My returns' />
			{filteredReturns.length === 0 ? (
				<p className='text-pink-700 text-center'>No returns found.</p>
			) : (
				<ul className='flex flex-col gap-5'>
					{filteredReturns.map((ret) => {
						const { label, icon, color } = getReturnStatusInfo(
							ret.status
						);
						return (
							<OrderItem
								key={ret.id}
								order={ret}
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
