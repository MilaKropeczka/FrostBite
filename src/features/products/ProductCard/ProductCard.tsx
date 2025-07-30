import { Button } from '@/components/UI';
import {
	ProductCardProps,
	ProductImage,
	ProductInfo,
} from '@/features/products';
import { BsBookmark } from 'react-icons/bs';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { useAddToCart } from '@/hooks/useAddToCart';
import { useShopSlice } from '@/store/useShopSlice';
import { motion } from 'framer-motion';

export function ProductCard({ product }: ProductCardProps) {
	const handleAddCart = useAddToCart();
	const favorites = useShopSlice((s) => s.favorites);
	const toggleFavorite = useShopSlice((s) => s.toggleFavorite);
	const isFavorite = favorites.includes(product.id);

	const handleToggleFav = (e: React.MouseEvent) => {
		e.preventDefault();
		toggleFavorite(product.id);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.4 }}>
			<div className='bg-white rounded-2xl shadow-lg w-full flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-1 justify-end mb-3 relative'>
				<div key={product.id} className='w-full'>
					<button
						className='cursor-pointer absolute top-2 right-2 p-2 rounded-full bg-white/95 hover:bg-pink-100 transition-colors duration-300 z-10'
						onClick={handleToggleFav}>
						{isFavorite ? (
							<BsFillBookmarkCheckFill
								size={24}
								className='text-pink-800'
							/>
						) : (
							<BsBookmark size={24} className='text-black/70' />
						)}
					</button>

					<ProductImage
						id={product.id}
						name={product.name}
						image={product.image}
					/>
					<ProductInfo
						id={product.id}
						name={product.name}
						stars={product.stars}
						price={product.price}
					/>
				</div>

				<Button
					className='w-full'
					onClick={() => handleAddCart(product)}>
					Add to cart
				</Button>
			</div>
		</motion.div>
	);
}
