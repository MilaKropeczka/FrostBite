import Image1 from '@/assets/11.jpg';
import { Order, OrderStatus, StatusInfo } from './types/index';
import { PackageCheck, Truck, Clock, XOctagon } from 'lucide-react';

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

export const statusMap: Record<OrderStatus, StatusInfo> = {
	pending: {
		label: 'Pending',
		icon: <Clock size={18} />,
		color: 'bg-yellow-100 text-yellow-800',
	},
	shipped: {
		label: 'Shipped',
		icon: <Truck size={18} />,
		color: 'bg-blue-100 text-blue-800',
	},
	delivered: {
		label: 'Delivered',
		icon: <PackageCheck size={18} />,
		color: 'bg-green-100 text-green-800',
	},
	cancelled: {
		label: 'Cancelled',
		icon: <XOctagon size={18} />,
		color: 'bg-red-100 text-red-800',
	},
};
