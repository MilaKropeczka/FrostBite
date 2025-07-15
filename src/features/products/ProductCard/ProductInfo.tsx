import { StarRating } from '@/components/UI';
import { Link } from 'react-router-dom';

export function ProductInfo({
	id,
	name,
	stars,
	price,
}: {
	id: number;
	name: string;
	stars: number;
	price: number;
}) {
	return (
		<div className='text-center py-3'>
			<p>
				<Link
					to={`/product/${id}`}
					className='text-pink-700 font-semibold text-lg'>
					{name}
				</Link>
			</p>
			<StarRating rating={stars} />
			<span className='text-gray-700 text-lg font-bold mt-1 block'>
				${price.toFixed(2)}
			</span>
		</div>
	);
}
