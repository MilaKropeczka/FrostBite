import { useState } from 'react';
import {
	PackageCheck,
	Truck,
	Clock,
	XOctagon,
	ChevronDown,
	ChevronUp,
} from 'lucide-react';
import Image1 from '@/assets/11.jpg';

type OrderStatus = 'pending' | 'shipped' | 'delivered' | 'cancelled';

type OrderProduct = {
	name: string;
	price: number;
	quantity: number;
	image?: string;
};

type Order = {
	id: string;
	date: string;
	status: OrderStatus;
	total: number;
	products: OrderProduct[];
};

const mockOrders: Order[] = [
	{
		id: '65789',
		date: '2025-07-25',
		status: 'delivered',
		total: 179.99,
		products: [
			{
				name: 'Summer Dress',
				price: 89.99,
				quantity: 1,
				image: Image1,
			},
			{
				name: 'Sunglasses',
				price: 29.0,
				quantity: 1,
				image: Image1,
			},
			{ name: 'Sandals', price: 61.0, quantity: 1, image: Image1 },
		],
	},
	{
		id: '23444',
		date: '2025-07-27',
		status: 'shipped',
		total: 89.49,
		products: [
			{
				name: 'Denim Jacket',
				price: 89.49,
				quantity: 1,
				image: Image1,
			},
		],
	},
	{
		id: '44556',
		date: '2025-07-29',
		status: 'pending',
		total: 249.0,
		products: [
			{
				name: 'Sports Shoes',
				price: 125.0,
				quantity: 1,
				image: Image1,
			},
			{
				name: 'Oversized Hoodie',
				price: 124.0,
				quantity: 1,
				image: Image1,
			},
		],
	},
	{
		id: '23081',
		date: '2025-07-20',
		status: 'cancelled',
		total: 79.0,
		products: [
			{
				name: 'Printed T-shirt',
				price: 39.0,
				quantity: 2,
				image: Image1,
			},
		],
	},
];

const statusMap: Record<
	OrderStatus,
	{ label: string; icon: JSX.Element; color: string }
> = {
	pending: {
		label: 'Pending',
		icon: <Clock size={18} />,
		color: 'bg-yellow-100 text-yellow-800',
	},
	shipped: {
		label: 'Shipped',
		icon: <Truck size={18} />,
		color: 'bg-blue-100 text-blue-800',
	},
	delivered: {
		label: 'Delivered',
		icon: <PackageCheck size={18} />,
		color: 'bg-green-100 text-green-800',
	},
	cancelled: {
		label: 'Cancelled',
		icon: <XOctagon size={18} />,
		color: 'bg-red-100 text-red-800',
	},
};

export function Orders() {
	const [openOrderId, setOpenOrderId] = useState<string | null>(null);

	const toggleDetails = (orderId: string) => {
		setOpenOrderId(openOrderId === orderId ? null : orderId);
	};

	return (
		<section className='w-full max-w-xl py-12 mb-12'>
			<h2 className='text-xl font-semibold text-center text-pink-800 mb-6 tracking-tight'>
				My orders
			</h2>

			{mockOrders.length === 0 ? (
				<p className='text-pink-700 text-center'>No orders found.</p>
			) : (
				<ul className='flex flex-col gap-5'>
					{mockOrders.map((order) => {
						const { label, icon, color } = statusMap[order.status];
						const isOpen = openOrderId === order.id;

						return (
							<li
								key={order.id}
								className='bg-gradient-to-tr from-grey-50 to-white ring ring-pink-100 shadow-lg rounded-xl p-4'>
								<div className='flex flex-col mb-2'>
									<div className='w-full flex justify-between'>
										<p className='text-pink-800 font-semibold'>
											Order No. {order.id}
										</p>
										<span
											className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${color}`}>
											{icon}
											{label}
										</span>
									</div>

									<div className='text-right w-full flex justify-between'>
										<p className='text-sm text-gray-500'>
											{order.date}
										</p>

										<span className='text-pink-800 font-bold'>
											{order.total.toFixed(2)} PLN
										</span>
									</div>
								</div>

								<button
									onClick={() => toggleDetails(order.id)}
									className='flex items-center text-xs text-pink-800 hover:text-pink-900 hover:underline transition-colors duration-300 self-end cursor-pointer pt-2 rounded-xl'>
									{isOpen ? (
										<>
											Hide details
											<ChevronUp
												size={16}
												className='ml-1'
											/>
										</>
									) : (
										<>
											Show details
											<ChevronDown
												size={16}
												className='ml-1'
											/>
										</>
									)}
								</button>
								{isOpen && (
									<div className='mt-4 text-sm text-gray-700 rounded-xl px-4'>
										<p>
											<strong>Delivery address:</strong>{' '}
											12 Kwiatowa St., 00-000 Warsaw
										</p>
										<p>
											<strong>Payment method:</strong>{' '}
											BLIK
										</p>
										<div className='mt-3'>
											<p className='font-semibold mb-1'>
												Products:
											</p>
											<ul className='space-y-2'>
												{order.products.map((p, i) => (
													<li
														key={i}
														className='w-full flex items-center gap-4 bg-white ring ring-pink-200  bg-gradient-to-br from-grey-50 to-pink-100 duration-300 rounded-lg shadow-md pr-6'>
														{p.image && (
															<img
																src={p.image}
																alt={p.name}
																className='size-12 object-cover rounded-l-md cursor-pointer'
															/>
														)}
														<div>
															<p className='font-medium text-pink-800 cursor-pointer'>
																{p.name}
															</p>
															<p className='text-sm text-gray-500'>
																{p.quantity}×{' '}
																{p.price.toFixed(
																	2
																)}{' '}
																PLN
															</p>
														</div>
													</li>
												))}
											</ul>
										</div>
										<p className='mt-3'>
											<strong>Note:</strong> Please
											deliver after 4 PM.
										</p>
									</div>
								)}
							</li>
						);
					})}
				</ul>
			)}
		</section>
	);
}
