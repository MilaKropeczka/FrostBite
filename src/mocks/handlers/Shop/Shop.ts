import { http, HttpResponse } from 'msw';
import { Category } from '@/features/products';
import organicFruitImage1 from '@/assets/1.jpg';
import organicFruitImage2 from '@/assets/2.jpg';
import organicFruitImage3 from '@/assets/3.jpg';
import organicFruitImage4 from '@/assets/4.jpg';
import organicFruitImage5 from '@/assets/5.jpg';
import organicFruitImage6 from '@/assets/6.jpg';
import organicFruitImage7 from '@/assets/7.jpg';
import organicFruitImage8 from '@/assets/8.jpg';
import organicFruitImage9 from '@/assets/9.jpg';
import organicFruitImage10 from '@/assets/10.jpg';
import organicFruitImage11 from '@/assets/11.jpg';

const getProductsHandler = http.get(`/FrostBite/shop/getItems`, async () => {
	const products = [
		{
			id: 2,
			name: 'Strawberry',
			category: Category.Flavours,
			image: organicFruitImage2,
			price: 4.1,
			stars: 4.5,
		},
		{
			id: 3,
			name: 'Mint',
			category: Category.Flavours,
			image: organicFruitImage3,
			price: 3.99,
			stars: 4.78,
		},
		{
			id: 10,
			name: 'Coffee',
			category: Category.Drinks,
			image: organicFruitImage10,
			price: 4.3,
			stars: 4.95,
		},
		{
			id: 8,
			name: 'Waffles',
			category: Category.Desserts,
			image: organicFruitImage8,
			price: 2.89,
			stars: 5,
		},
		{
			id: 5,
			name: 'Blueberry',
			category: Category.Flavours,
			image: organicFruitImage5,
			price: 3.59,
			stars: 4.2,
		},
		{
			id: 6,
			name: 'Waffles',
			category: Category.Desserts,
			image: organicFruitImage6,
			price: 3.99,
			stars: 3.95,
		},

		{
			id: 7,
			name: 'Waffles',
			category: Category.Desserts,
			image: organicFruitImage7,
			price: 3.59,
			stars: 4.7,
		},
		{
			id: 4,
			name: 'Banana',
			category: Category.Flavours,
			image: organicFruitImage4,
			price: 3.99,
			stars: 4.85,
		},
		{
			id: 9,
			name: 'Waffles',
			category: Category.Desserts,
			image: organicFruitImage9,
			price: 2.0,
			stars: 3.75,
		},
		{
			id: 11,
			name: 'Orange drink',
			category: Category.Drinks,
			image: organicFruitImage11,
			price: 3.0,
			stars: 4.52,
		},
		{
			id: 1,
			name: 'Chocolate',
			category: Category.Flavours,
			image: organicFruitImage1,
			price: 5.9,
			stars: 4.3,
		},
	];

	await new Promise((resolve) => {
		setTimeout(resolve, 200);
	});

	const shouldFail = Math.random() < 0.2;

	if (shouldFail) {
		return HttpResponse.error();
	}

	return HttpResponse.json(products, { status: 200 });
});

export const shopHandlers = [getProductsHandler];
