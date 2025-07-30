import { ProductCard } from '@/features/products';
import { useProductFilter } from '@/contexts/ProductFilterContext';
import { Categories } from '../Categories';
import { ProductSkeleton } from '../ProductCard/ProductSkeleton';
import { ProductError } from '../ProductCard/ProductError';
import { InfoFooter } from '@/components/InfoFooter/InfoFooter';

const skeletonCount = 4;

export function ProductSection() {
	const { selectedCategory, filteredProducts, isLoading, isError } =
		useProductFilter();

	return (
		<>
			<Categories />
			<main className='flex flex-col items-center px-2 sm:px-4 w-full'>
				{isError ? (
					<ProductError />
				) : isLoading ? (
					<div className='rounded bg-pink-200 mt-12 font-semibold relative block h-6 w-34 animate-pulse' />
				) : (
					<h2 className='text-xl tracking-tight mt-12 px-4 sm:px-0 font-semibold relative bg-gradient-to-r from-pink-700 to-pink-950 text-transparent bg-clip-text inline-block'>
						{selectedCategory || 'Explore'}
					</h2>
				)}
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-4 mb-16 w-full max-w-6xl px-10 sm:px-4'>
					{isLoading
						? [...Array(skeletonCount)].map((_, i) => (
								<ProductSkeleton key={i} />
						  ))
						: filteredProducts.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
								/>
						  ))}
				</div>
			</main>
			<InfoFooter />
		</>
	);
}
