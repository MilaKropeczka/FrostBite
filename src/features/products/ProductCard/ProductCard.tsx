import { Button } from '@/components/UI';
import {
	ProductCardProps,
	ProductImage,
	ProductInfo,
} from '@/features/products';
import { Link } from 'react-router-dom';

export function ProductCard({ product }: ProductCardProps) {
	return (
		<div className='bg-white rounded-2xl shadow-xl w-full flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-1 justify-end mb-3'>
			<Link to='product'>
				<ProductImage name={product.name} image={product.image} />
				<ProductInfo
					name={product.name}
					stars={4}
					price={product.price}
				/>
			</Link>
			<Button
				className='w-full'
				onClick={() => {
					alert('dodaje do koszyka');
				}}>
				Add to cart
			</Button>
		</div>
	);
}
