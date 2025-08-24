import { Order } from './types/index';
import { useState, ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { OrderImages } from './OrderImages';
import { OrderProductItem } from './OrderProductItem';

type OrderItemProps = {
	order: Order;
	statusLabel: string;
	statusIcon: ReactNode;
	statusColor: string;
};

export function OrderItem({
	order,
	statusLabel,
	statusIcon,
	statusColor,
}: OrderItemProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<li className='bg-white shadow-lg rounded-xl p-4 flex flex-col'>
			<div className='flex gap-4'>
				<OrderImages products={order.products} />
				<div className='flex-1 flex flex-col justify-between'>
					<div className='flex justify-between items-center'>
						<p className='text-pink-800 font-semibold'>
							Order No. {order.id}
						</p>
						<span
							className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${statusColor}`}>
							{statusIcon}
							{statusLabel}
						</span>
					</div>

					<div className='flex justify-between'>
						<p className='text-sm text-gray-500'>{order.date}</p>
						<span className='text-pink-800 font-bold'>
							{order.total.toFixed(2)} PLN
						</span>
					</div>
					<p className='text-xs text-gray-500 truncate flex items-center gap-2'>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='self-center text-xs text-pink-800 hover:text-pink-900 hover:underline transition-colors duration-300 flex items-center gap-1 cursor-pointer'>
							{isOpen ? (
								<>
									Hide
									<ChevronUp size={16} />
								</>
							) : (
								<>
									Show
									<ChevronDown size={16} />
								</>
							)}
						</button>
					</p>
				</div>
			</div>

			{isOpen && (
				<div className='mt-2 text-sm text-gray-700 rounded-xl px-4'>
					<p>
						<strong>Delivery address:</strong> 12 Kwiatowa St.,
						00-000 Warsaw
					</p>
					<p>
						<strong>Payment method:</strong> BLIK
					</p>
					<div className='mt-3'>
						<p className='font-semibold mb-1'>Products:</p>
						<ul className='flex flex-col gap-3'>
							{order.products.map((p) => (
								<OrderProductItem key={p.name} product={p} />
							))}
						</ul>
					</div>
					<p className='mt-3'>
						<strong>Note:</strong> Please deliver after 4 PM.
					</p>
				</div>
			)}
		</li>
	);
}
