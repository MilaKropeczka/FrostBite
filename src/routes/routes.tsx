import { RouteObject } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { ProductSection } from '@/features/ProductSection';

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <ProductSection />,
			},
		],
	},
];
