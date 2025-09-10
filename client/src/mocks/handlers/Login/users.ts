import { http, HttpResponse } from 'msw';
import { Order } from '@/components/TransactionItem/types';
import organicFruitImage1 from '@/assets/1.jpg';
import organicFruitImage2 from '@/assets/2.jpg';
import organicFruitImage3 from '@/assets/3.jpg';
import organicFruitImage4 from '@/assets/4.jpg';
import organicFruitImage5 from '@/assets/5.jpg';
import organicFruitImage8 from '@/assets/8.jpg';
import organicFruitImage10 from '@/assets/10.jpg';
import organicFruitImage11 from '@/assets/11.jpg';

const users = [{ id: '1', email: 'test@test.pl', password: 'testpassword123' }];

const orders: Record<string, Order[]> = {
	'1': [
		{
			id: '65789',
			date: '2025-07-25',
			status: 'delivered',
			total: 16.49,
			products: [
				{
					name: 'Coffee',
					price: 4.3,
					quantity: 1,
					image: organicFruitImage10,
				},
				{
					name: 'Strawberry',
					price: 4.1,
					quantity: 2,
					image: organicFruitImage2,
				},
				{
					name: 'Mint',
					price: 3.99,
					quantity: 1,
					image: organicFruitImage3,
				},
			],
		},
		{
			id: '23444',
			date: '2025-07-27',
			status: 'shipped',
			total: 3.99,
			products: [
				{
					name: 'Mint',
					price: 3.99,
					quantity: 3,
					image: organicFruitImage3,
				},
			],
		},
		{
			id: '23344',
			date: '2025-07-27',
			status: 'requested',
			total: 3.99,
			products: [
				{
					name: 'Mint',
					price: 3.99,
					quantity: 1,
					image: organicFruitImage3,
				},
			],
		},
		{
			id: '23412',
			date: '2025-07-27',
			status: 'approved',
			total: 4.3,
			products: [
				{
					name: 'Coffee',
					price: 4.3,
					quantity: 1,
					image: organicFruitImage10,
				},
			],
		},
		{
			id: '23402',
			date: '2025-07-27',
			status: 'rejected',
			total: 4.3,
			products: [
				{
					name: 'Coffee',
					price: 4.3,
					quantity: 1,
					image: organicFruitImage10,
				},
			],
		},
		{
			id: '44556',
			date: '2025-07-29',
			status: 'pending',
			total: 8.6,
			products: [
				{
					name: 'Mint',
					price: 3.99,
					quantity: 1,
					image: organicFruitImage3,
				},
				{
					name: 'Coffee',
					price: 4.3,
					quantity: 1,
					image: organicFruitImage10,
				},
			],
		},
		{
			id: '23081',
			date: '2025-07-20',
			status: 'cancelled',
			total: 38.92,
			products: [
				{
					name: 'Waffles',
					price: 2.89,
					quantity: 2,
					image: organicFruitImage8,
				},
				{
					name: 'Blueberry',
					price: 3.59,
					quantity: 2,
					image: organicFruitImage5,
				},
				{
					name: 'Banana',
					price: 3.99,
					quantity: 2,
					image: organicFruitImage4,
				},
				{
					name: 'Orange drink',
					price: 3.0,
					quantity: 2,
					image: organicFruitImage11,
				},
				{
					name: 'Chocolate',
					price: 5.9,
					quantity: 2,
					image: organicFruitImage1,
				},
			],
		},
	],
};

type LoginBody = {
	email: string;
	password: string;
};

const loginHandler = http.post('/api/login', async ({ request }) => {
	const body = (await request.json()) as LoginBody;
	const { email, password } = body;

	await new Promise((resolve) => setTimeout(resolve, 200));

	// const shouldFail = Math.random() < 0.1;

	// if (shouldFail) {
	// 	return HttpResponse.error();
	// }

	const user = users.find(
		(u) => u.email === email && u.password === password
	);
	if (!user) {
		return HttpResponse.json(
			{ message: 'Invalid credentials' },
			{ status: 401 }
		);
	}

	return HttpResponse.json({ token: `token-${user.id}` });
});

const ordersHandler = http.get('/api/orders', async ({ request }) => {
	await new Promise((resolve) => setTimeout(resolve, 200));

	// const shouldFail = Math.random() < 0.1;
	// if (shouldFail) {
	// 	return HttpResponse.error();
	// }

	const auth = request.headers.get('Authorization');
	if (!auth) {
		return HttpResponse.json({ message: 'Unauthorized' }, { status: 401 });
	}

	const userId = auth.replace('Bearer token-', '');
	return HttpResponse.json(orders[userId] ?? []);
});

export const apiHandlers = [loginHandler, ordersHandler];
