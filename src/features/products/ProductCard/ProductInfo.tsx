import { StarRating } from '@/components/UI';

export function ProductInfo({
	name,
	stars,
	price,
}: {
	name: string;
	stars: number;
	price: string;
}) {
	return (
		<div className='text-center p-3'>
			<p className='text-pink-700 font-semibold text-lg'>{name}</p>
			<StarRating rating={stars} />
			<span className='text-gray-700 text-lg font-bold mt-1 block'>
				{price}
			</span>
		</div>
	);
}
