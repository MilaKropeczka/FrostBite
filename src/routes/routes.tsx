import { RouteObject } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { ProductSection } from '@/features/products';
import { Favorites } from '@/features/favorites';
import { Cart } from '@/features/cart';
import { ProductView } from '@/features/products';

export const routes: RouteObject[] = [
	{
		children: [
			{
				element: <MainLayout />,
				children: [
					{ path: '/', element: <ProductSection /> },
					{ path: '/categories', element: <div>filtred</div> },
					{ path: '/search', element: <div>filtredSearch</div> },
					{ path: '/favorites', element: <Favorites /> },
					{ path: '/cart', element: <Cart /> },
					{ path: '/product/:productId', element: <ProductView /> },
				],
			},
		],
	},
];
