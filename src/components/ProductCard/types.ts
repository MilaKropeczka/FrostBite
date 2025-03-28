interface Product {
	image: string;
	name: string;
	stars: number;
	price: string;
}

export interface ProductCardProps {
	product: Product;
}
