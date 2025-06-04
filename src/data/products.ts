import organicFruitImage1 from '@/assets/1.jpg';
import organicFruitImage2 from '@/assets/2.jpg';
import organicFruitImage3 from '@/assets/3.jpg';
import organicFruitImage4 from '@/assets/4.jpg';
import organicFruitImage5 from '@/assets/5.jpg';
import organicFruitImage6 from '@/assets/6.jpg';
import organicFruitImage7 from '@/assets/7.jpg';
import organicFruitImage8 from '@/assets/8.jpg';
import { Category } from '@/features/products';

export const products = [
	{
		id: 1,
		name: 'Chocolate',
		category: Category.Flavours,
		image: organicFruitImage1,
		price: '$5.90',
		stars: 4,
	},
	{
		id: 2,
		name: 'Strawberry',
		category: Category.Flavours,
		image: organicFruitImage2,
		price: '$4.10',
		stars: 5,
	},
	{
		id: 3,
		name: 'Mint',
		category: Category.Flavours,
		image: organicFruitImage3,
		price: '$3.99',
		stars: 3,
	},
	{
		id: 4,
		name: 'Banana',
		category: Category.Flavours,
		image: organicFruitImage4,
		price: '$3.99',
		stars: 5,
	},
	{
		id: 5,
		name: 'Blueberry',
		category: Category.Flavours,
		image: organicFruitImage5,
		price: '$3.59',
		stars: 5,
	},
	{
		id: 6,
		name: 'Waffles',
		category: Category.Desserts,
		image: organicFruitImage6,
		price: '$3.99',
		stars: 5,
	},
	{
		id: 7,
		name: 'Waffles',
		category: Category.Desserts,
		image: organicFruitImage7,
		price: '$3.59',
		stars: 5,
	},
	{
		id: 8,
		name: 'Waffles',
		category: Category.Desserts,
		image: organicFruitImage8,
		price: '$2.89',
		stars: 5,
	},
];
