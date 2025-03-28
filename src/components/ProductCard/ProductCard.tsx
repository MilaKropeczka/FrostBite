import StarRating from '../UI/StarRating';
import Button from '../UI/Button';
import { ProductCardProps } from './types';

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<div className='bg-white rounded-2xl shadow-xl w-full flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 justify-end mb-3'>
			<div className='w-full h-48 overflow-hidden rounded-t-xl'>
				<img
					src={product.image}
					alt={product.name}
					className='w-full h-full object-cover'
				/>
			</div>
			<div className='text-center p-3'>
				<p className='text-pink-700 font-semibold text-lg'>
					{product.name}
				</p>
				<StarRating rating={product.stars} />
				<span className='text-gray-700 text-lg font-bold mt-1 block'>
					{product.price}
				</span>
			</div>
			<Button
				onClick={() => {
					alert('dodaje do koszyka');
				}}>
				Add to cart
			</Button>
		</div>
	);
}
