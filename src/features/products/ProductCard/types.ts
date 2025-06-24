export enum Category {
	Flavours = ' Flavours',
	Drinks = 'Drinks',
	Desserts = 'Desserts',
}

export interface Product {
	id: number;
	image: string;
	name: string;
	category: Category;
	stars: number;
	price: number;
}

export interface ProductCardProps {
	product: Product;
}
