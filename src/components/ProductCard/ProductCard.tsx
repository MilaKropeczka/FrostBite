import StarRating from '@/components/UI/StarRating';
import Button from '@/components/UI/Button';
import { ProductCardProps } from '@/components/ProductCard/types';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<div className='bg-white rounded-2xl shadow-xl w-full flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-1 justify-end mb-3'>
			<Link to='product'>
				<div className='w-full h-48 overflow-hidden rounded-t-2xl'>
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
			</Link>
			<Button
				onClick={() => {
					alert('dodaje do koszyka');
				}}>
				Add to cart
			</Button>
		</div>
	);
}
