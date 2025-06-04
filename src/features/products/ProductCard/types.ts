export enum Category {
	Flavours = ' Flavours',
	Drinks = 'Drinks',
	Desserts = 'Desserts',
}

interface Product {
	image: string;
	name: string;
	category: Category;
	stars: number;
	price: string;
}

export interface ProductCardProps {
	product: Product;
}
