import { Button } from '@/components/UI';
import {
	ProductCardProps,
	ProductImage,
	ProductInfo,
} from '@/features/products';
import { Link } from 'react-router-dom';
import { BsBookmark } from 'react-icons/bs';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { useState } from 'react';
import { useAddToCart } from '@/hooks/useAddToCart';

export function ProductCard({ product }: ProductCardProps) {
	const [liked, setLiked] = useState(false);
	const handleAddCart = useAddToCart();

	return (
		<div className='bg-white rounded-2xl shadow-xl w-full flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-1 justify-end mb-3 relative'>
			<Link
				key={product.id}
				to={`/product/${product.id}`}
				className='w-full'>
				<div
					className='absolute top-2 right-2 p-2 rounded-full bg-white/95 hover:bg-pink-100 transition-colors duration-300 z-10'
					onClick={(e) => {
						e.preventDefault();
						setLiked(!liked);
					}}>
					{liked ? (
						<BsFillBookmarkCheckFill
							size={24}
							className='text-pink-800'
						/>
					) : (
						<BsBookmark size={24} className='text-black/70' />
					)}
				</div>

				<ProductImage name={product.name} image={product.image} />
				<ProductInfo
					name={product.name}
					stars={4}
					price={product.price}
				/>
			</Link>

			<Button className='w-full' onClick={() => handleAddCart(product)}>
				Add to cart
			</Button>
		</div>
	);
}
