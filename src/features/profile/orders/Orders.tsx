import { SecondTitle } from '@/components/UI/SecondTitle';
import { OrderItem } from './components/OrderItem';
import { mockOrders } from './ordersData';

export function Orders() {
	return (
		<section className='w-full max-w-3xl py-16 mb-12 p-6'>
			<SecondTitle title='My orders' />
			{mockOrders.length === 0 ? (
				<p className='text-pink-700 text-center'>No orders found.</p>
			) : (
				<ul className='flex flex-col gap-5'>
					{mockOrders.map((order) => (
						<OrderItem key={order.id} order={order} />
					))}
				</ul>
			)}
		</section>
	);
}
