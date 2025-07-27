import { Product } from '@/features/products';
import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { useShoprQuery } from '@/services/api/useShopQuery';

type ProductFilterContextType = {
	selectedCategory: string | null;
	setSelectedCategory: (category: string | null) => void;
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	filteredProducts: Product[];
	isLoading: boolean;
	isError: boolean;
};

const ProductFilterContext = createContext<
	ProductFilterContextType | undefined
>(undefined);

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

export function useProductFilter() {
	const context = useContext(ProductFilterContext);
	if (!context) {
		throw new Error(
			'useProductFilter must be used within a ProductFilterProvider'
		);
	}
	return context;
}
