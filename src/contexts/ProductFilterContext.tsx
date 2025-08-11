import { createContext, useContext } from 'react';
import { Product } from '@/features/products';

export type ProductFilterContextType = {
	selectedCategory: string | null;
	setSelectedCategory: (category: string | null) => void;
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	filteredProducts: Product[];
	isLoading: boolean;
	isError: boolean;
};

export const ProductFilterContext = createContext<
	ProductFilterContextType | undefined
>(undefined);

export function useProductFilter() {
	const context = useContext(ProductFilterContext);
	if (!context) {
		throw new Error(
			'useProductFilter must be used within a ProductFilterProvider'
		);
	}
	return context;
}
