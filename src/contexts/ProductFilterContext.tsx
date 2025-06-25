import { Product } from '@/features/products';
import { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { products } from '@/data/products';

type ProductFilterContextType = {
	selectedCategory: string | null;
	setSelectedCategory: (category: string | null) => void;
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	filteredProducts: Product[];
};

const ProductFilterContext = createContext<
	ProductFilterContextType | undefined
>(undefined);

export function ProductFilterProvider({ children }: { children: ReactNode }) {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(
		null
	);
	const [searchTerm, setSearchTerm] = useState<string>('');

	const filteredProducts = useMemo(() => {
		return products.filter((product) => {
			const matchesCategory = selectedCategory
				? product.category === selectedCategory
				: true;
			const matchesSearch = searchTerm
				? product.name.toLowerCase().includes(searchTerm.toLowerCase())
				: true;
			return matchesCategory && matchesSearch;
		});
	}, [selectedCategory, searchTerm]);

	return (
		<ProductFilterContext.Provider
			value={{
				selectedCategory,
				setSelectedCategory,
				searchTerm,
				setSearchTerm,
				filteredProducts,
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
