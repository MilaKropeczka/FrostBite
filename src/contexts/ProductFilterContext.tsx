import { createContext, useContext, useState } from 'react';

type ProductFilterContextType = {
	selectedCategory: string | null;
	setSelectedCategory: (category: string | null) => void;
};

const ProductFilterContext = createContext<
	ProductFilterContextType | undefined
>(undefined);

export function ProductFilterProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(
		null
	);

	return (
		<ProductFilterContext.Provider
			value={{ selectedCategory, setSelectedCategory }}>
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
