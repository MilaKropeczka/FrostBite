import { ReactNode, useMemo, useState } from 'react';
import { Product } from '@/features/products';
import { useShoprQuery } from '@/services/api/useShopQuery';
import { ProductFilterContext } from './ProductFilterContext';

export function ProductFilterProvider({ children }: { children: ReactNode }) {
	const { data: products = [], isLoading, isError } = useShoprQuery();
	const [selectedCategory, setSelectedCategory] = useState<string | null>(
		null
	);
	const [searchTerm, setSearchTerm] = useState<string>('');

	const filteredProducts = useMemo(() => {
		return products.filter((product: Product) => {
			const matchesCategory = selectedCategory
				? product.category === selectedCategory
				: true;
			const matchesSearch = searchTerm
				? product.name.toLowerCase().includes(searchTerm.toLowerCase())
				: true;
			return matchesCategory && matchesSearch;
		});
	}, [selectedCategory, searchTerm, products]);

	return (
		<ProductFilterContext.Provider
			value={{
				selectedCategory,
				setSelectedCategory,
				searchTerm,
				setSearchTerm,
				filteredProducts,
				isLoading,
				isError,
			}}>
			{children}
		</ProductFilterContext.Provider>
	);
}
