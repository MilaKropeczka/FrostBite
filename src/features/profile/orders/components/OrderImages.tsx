import { OrderProduct } from '../types';

export function OrderImages({ products }: { products: OrderProduct[] }) {
	const count = products.length;

	if (count === 1) {
		return (
			<img
				src={products[0].image}
				alt={products[0].name}
				className='size-20 object-cover rounded-lg'
			/>
		);
	}

	if (count === 2) {
		return (
			<div className='flex size-20 rounded-lg overflow-hidden'>
				{products.slice(0, 2).map((p, i) => (
					<img
						key={i}
						src={p.image}
						alt={p.name}
						className='w-1/2 h-full object-cover'
					/>
				))}
			</div>
		);
	}

	if (count === 3) {
		return (
			<div className='flex flex-wrap size-20 rounded-lg overflow-hidden'>
				<img
					src={products[0].image}
					alt={products[0].name}
					className='w-full h-1/2 object-cover'
				/>
				{products.slice(1, 3).map((p, i) => (
					<img
						key={i}
						src={p.image}
						alt={p.name}
						className='w-1/2 h-1/2 object-cover'
					/>
				))}
			</div>
		);
	}

	return (
		<div className='flex flex-wrap size-20 rounded-lg overflow-hidden relative'>
			{products.slice(0, 4).map((p, i) => (
				<div key={i} className='relative w-1/2 h-1/2'>
					<img
						src={p.image}
						alt={p.name}
						className='size-full object-cover'
					/>
					{i === 3 && products.length > 4 && (
						<div className='absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-sm'>
							+{products.length - 4}
						</div>
					)}
				</div>
			))}
		</div>
	);
}
