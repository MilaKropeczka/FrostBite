import { StarRating } from '@/components/UI';

export function ProductInfo({
	name,
	stars,
	price,
}: {
	name: string;
	stars: number;
	price: number;
}) {
	return (
		<div className='text-center py-3'>
			<p className='text-pink-700 font-semibold text-lg cursor-pointer'>
				{name}
			</p>
			<StarRating rating={stars} />
			<span className='text-gray-700 text-lg font-bold mt-1 block'>
				{price}
			</span>
		</div>
	);
}
