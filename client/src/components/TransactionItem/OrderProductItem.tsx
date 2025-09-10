import { OrderProduct } from '../types';

export function OrderProductItem({ product }: { product: OrderProduct }) {
	return (
		<li className='flex items-center gap-4 bg-gray-100 rounded-lg p-3'>
			{product.image && (
				<img
					src={product.image}
					alt={product.name}
					className='w-16 h-16 object-cover rounded-lg'
				/>
			)}
			<div className='flex flex-col'>
				<span className='font-medium text-pink-800 cursor-pointer'>
					{product.name}
				</span>
				<span className='text-sm text-gray-600'>
					{product.quantity}× {product.price.toFixed(2)} PLN
				</span>
			</div>
		</li>
	);
}
