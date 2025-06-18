export enum Category {
	Flavours = ' Flavours',
	Drinks = 'Drinks',
	Desserts = 'Desserts',
}

export interface Product {
	image: string;
	name: string;
	category: Category;
	stars: number;
	price: number;
}

export interface ProductCardProps {
	product: Product;
}
