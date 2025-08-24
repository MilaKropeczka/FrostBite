import { ReactNode } from 'react';

export type OrderStatus =
	| 'pending'
	| 'shipped'
	| 'delivered'
	| 'cancelled'
	| 'requested'
	| 'approved'
	| 'rejected';

export type OrderProduct = {
	name: string;
	price: number;
	quantity: number;
	image?: string;
};

export type Order = {
	id: string;
	date: string;
	status: OrderStatus;
	total: number;
	products: OrderProduct[];
};

export type StatusInfo = {
	label: string;
	icon: ReactNode;
	color: string;
};
