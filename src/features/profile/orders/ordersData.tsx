import Image1 from '@/assets/11.jpg';
import { Order } from '../../../components/TransactionItem/types/index';

export const mockOrders: Order[] = [
	{
		id: '65789',
		date: '2025-07-25',
		status: 'delivered',
		total: 179.99,
		products: [
			{ name: 'Summer Dress', price: 89.99, quantity: 1, image: Image1 },
			{ name: 'Sunglasses', price: 29.0, quantity: 1, image: Image1 },
			{ name: 'Sandals', price: 61.0, quantity: 1, image: Image1 },
		],
	},
	{
		id: '23444',
		date: '2025-07-27',
		status: 'shipped',
		total: 89.49,
		products: [
			{ name: 'Denim Jacket', price: 89.49, quantity: 1, image: Image1 },
		],
	},
	{
		id: '23344',
		date: '2025-07-27',
		status: 'requested',
		total: 89.49,
		products: [
			{ name: 'Denim Jacket', price: 89.49, quantity: 1, image: Image1 },
		],
	},
	{
		id: '23412',
		date: '2025-07-27',
		status: 'approved',
		total: 89.49,
		products: [
			{ name: 'Denim Jacket', price: 89.49, quantity: 1, image: Image1 },
		],
	},
	{
		id: '23402',
		date: '2025-07-27',
		status: 'rejected',
		total: 89.49,
		products: [
			{ name: 'Denim Jacket', price: 89.49, quantity: 1, image: Image1 },
		],
	},
	{
		id: '44556',
		date: '2025-07-29',
		status: 'pending',
		total: 249.0,
		products: [
			{ name: 'Sports Shoes', price: 125.0, quantity: 1, image: Image1 },
			{
				name: 'Oversized Hoodie',
				price: 124.0,
				quantity: 1,
				image: Image1,
			},
		],
	},
	{
		id: '23081',
		date: '2025-07-20',
		status: 'cancelled',
		total: 79.0,
		products: [
			{
				name: 'Printed T-shirt',
				price: 39.0,
				quantity: 2,
				image: Image1,
			},
			{
				name: 'Printed T-shirt',
				price: 39.0,
				quantity: 2,
				image: Image1,
			},
			{
				name: 'Printed T-shirt',
				price: 39.0,
				quantity: 2,
				image: Image1,
			},
			{
				name: 'Printed T-shirt',
				price: 39.0,
				quantity: 2,
				image: Image1,
			},
			{
				name: 'Printed T-shirt',
				price: 39.0,
				quantity: 2,
				image: Image1,
			},
		],
	},
];
