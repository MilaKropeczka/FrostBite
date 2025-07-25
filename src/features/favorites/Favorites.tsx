import { Product, ProductImage, ProductInfo } from '@/features/products';
import { Button } from '@/components/UI';
import { BsFillBookmarkCheckFill, BsBookmark } from 'react-icons/bs';
import { useAddToCart } from '@/hooks/useAddToCart';
import { useShopSlice } from '@/store/useShopSlice';
import { motion } from 'framer-motion';
import { useProductFilter } from '@/contexts/ProductFilterContext';

export function Favorites() {
	const handleAddCart = useAddToCart();
	const { filteredProducts: products } = useProductFilter();
	const favorites = useShopSlice((s) => s.favorites);
	const toggleFavorite = useShopSlice((s) => s.toggleFavorite);
	const favProducts = products.filter((p: Product) =>
		favorites.includes(p.id)
	);

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.4 }}>
			<h2 className='text-2xl font-bold mt-12 mb-6'>
				Twoje ulubione produkty
			</h2>
			{favProducts.length === 0 ? (
				<p className='text-gray-500'>Brak ulubionych produktów.</p>
			) : (
				<ul className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-18'>
					{favProducts.map((product: Product) => {
						const isFav = favorites.includes(product.id);
						return (
							<li
								key={product.id}
								className='relative bg-white rounded-2xl shadow-2xl flex items-center md:gap-4 hover:-translate-y-1 duration-300'>
								<ProductImage
									id={product.id}
									name={product.name}
									image={product.image}
									className='rounded-r-none rounded-l-2xl aspect-[17/20] md:aspect-[19/20]'
								/>
								<button
									className='absolute top-2 right-2 flex-1 cursor-pointer'
									onClick={() => toggleFavorite(product.id)}>
									{isFav ? (
										<BsFillBookmarkCheckFill
											size={24}
											className='text-pink-800 hover:text-pink-900 duration-300'
										/>
									) : (
										<BsBookmark
											size={24}
											className='text-gray-400 hover:text-pink-800 duration-300'
										/>
									)}
								</button>
								<div className='flex-1 w-56 md:w-auto'>
									<ProductInfo
										id={product.id}
										name={product.name}
										stars={product.stars}
										price={product.price}
									/>
									<div className='flex justify-center mt-4'>
										<Button
											className='w-60 sm:w-65 xl:w-85 !p-2'
											onClick={() =>
												handleAddCart(product)
											}>
											Add to cart
										</Button>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</motion.div>
	);
}
