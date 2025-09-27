import { NextResponse } from 'next/server';
import { Order } from '@/components/TransactionItem/types';

const orders: Record<string, Order[]> = {
	'1': [
		{
			id: '65789',
			date: '2025-07-25',
			status: 'delivered',
			total: 16.49,
			products: [
				{ name: 'Coffee', price: 4.3, quantity: 1, image: '/1.jpg' },
				{
					name: 'Strawberry',
					price: 4.1,
					quantity: 2,
					image: '/2.jpg',
				},
				{ name: 'Mint', price: 3.99, quantity: 1, image: '/3.jpg' },
			],
		},
		{
			id: '23444',
			date: '2025-07-27',
			status: 'shipped',
			total: 3.99,
			products: [
				{ name: 'Mint', price: 3.99, quantity: 3, image: '/3.jpg' },
			],
		},
		{
			id: '23344',
			date: '2025-07-27',
			status: 'requested',
			total: 3.99,
			products: [
				{ name: 'Mint', price: 3.99, quantity: 1, image: '/3.jpg' },
			],
		},
		{
			id: '23412',
			date: '2025-07-27',
			status: 'approved',
			total: 4.3,
			products: [
				{ name: 'Coffee', price: 4.3, quantity: 1, image: '/10.jpg' },
			],
		},
		{
			id: '23402',
			date: '2025-07-27',
			status: 'rejected',
			total: 4.3,
			products: [
				{ name: 'Coffee', price: 4.3, quantity: 1, image: '/10.jpg' },
			],
		},
		{
			id: '44556',
			date: '2025-07-29',
			status: 'pending',
			total: 8.6,
			products: [
				{ name: 'Mint', price: 3.99, quantity: 1, image: '/3.jpg' },
				{ name: 'Coffee', price: 4.3, quantity: 1, image: '/10.jpg' },
			],
		},
		{
			id: '23081',
			date: '2025-07-20',
			status: 'cancelled',
			total: 38.92,
			products: [
				{ name: 'Waffles', price: 2.89, quantity: 2, image: '/8.jpg' },
				{
					name: 'Blueberry',
					price: 3.59,
					quantity: 2,
					image: '/5.jpg',
				},
				{ name: 'Banana', price: 3.99, quantity: 2, image: '/4.jpg' },
				{
					name: 'Orange drink',
					price: 3.0,
					quantity: 2,
					image: '/11.jpg',
				},
				{ name: 'Chocolate', price: 5.9, quantity: 2, image: '/1.jpg' },
			],
		},
	],
};

export async function GET(req: Request) {
	await new Promise((resolve) => setTimeout(resolve, 200));

	const auth = req.headers.get('authorization');
	if (!auth) {
		return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
	}

	const userId = auth.replace('Bearer token-', '');
	return NextResponse.json(orders[userId] ?? []);
}
