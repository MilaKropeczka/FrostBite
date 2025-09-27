import { NextResponse } from 'next/server';
import { Category } from '@/features/products';

export async function GET() {
	const products = [
		{
			id: 2,
			name: 'Strawberry',
			category: Category.Flavours,
			image: '/2.jpg',
			price: 4.1,
			stars: 4.5,
		},
		{
			id: 3,
			name: 'Mint',
			category: Category.Flavours,
			image: '/3.jpg',
			price: 3.99,
			stars: 4.78,
		},
		{
			id: 10,
			name: 'Coffee',
			category: Category.Drinks,
			image: '/10.jpg',
			price: 4.3,
			stars: 4.95,
		},
		{
			id: 8,
			name: 'Waffles',
			category: Category.Desserts,
			image: '/8.jpg',
			price: 2.89,
			stars: 5,
		},
		{
			id: 5,
			name: 'Blueberry',
			category: Category.Flavours,
			image: '/5.jpg',
			price: 3.59,
			stars: 4.2,
		},
		{
			id: 6,
			name: 'Waffles',
			category: Category.Desserts,
			image: '/6.jpg',
			price: 3.99,
			stars: 3.95,
		},
		{
			id: 7,
			name: 'Waffles',
			category: Category.Desserts,
			image: '/7.jpg',
			price: 3.59,
			stars: 4.7,
		},
		{
			id: 4,
			name: 'Banana',
			category: Category.Flavours,
			image: '/4.jpg',
			price: 3.99,
			stars: 4.85,
		},
		{
			id: 9,
			name: 'Waffles',
			category: Category.Desserts,
			image: '/9.jpg',
			price: 2.0,
			stars: 3.75,
		},
		{
			id: 11,
			name: 'Orange drink',
			category: Category.Drinks,
			image: '/11.jpg',
			price: 3.0,
			stars: 4.52,
		},
		{
			id: 1,
			name: 'Chocolate',
			category: Category.Flavours,
			image: '/1.jpg',
			price: 5.9,
			stars: 4.3,
		},
	];

	await new Promise((resolve) => setTimeout(resolve, 200));

	return NextResponse.json(products);
}
