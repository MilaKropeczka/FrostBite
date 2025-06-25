import { ProductCard } from '@/features/products';
import { useProductFilter } from '@/contexts/ProductFilterContext';
import { Categories } from '../Categories';

export function ProductSection() {
	const { selectedCategory, filteredProducts } = useProductFilter();

	return (
		<>
			<Categories />
			<main className='flex flex-col items-center px-2 sm:px-4 w-full'>
				<h2 className='text-xl tracking-tight mt-12 px-4 sm:px-0 font-semibold relative bg-gradient-to-r from-pink-700 to-pink-950 text-transparent bg-clip-text inline-block'>
					{selectedCategory ? selectedCategory : 'Explore'}
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-4 w-full max-w-6xl px-10 sm:px-4'>
					{filteredProducts.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</main>
		</>
	);
}
