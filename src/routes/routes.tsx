import { RouteObject } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { ProductSection } from '@/features/products';
import { Favorites } from '@/features/favorites';
import { Cart } from '@/features/cart';
import { ProductView } from '@/features/products';
import { Orders } from '@/features/orders/Orders';

export const routes: RouteObject[] = [
	{
		children: [
			{
				element: <MainLayout />,
				children: [
					{ path: '/', element: <ProductSection /> },
					{ path: '/favorites', element: <Favorites /> },
					{ path: '/cart', element: <Cart /> },
					{ path: '/product/:productId', element: <ProductView /> },
					{ path: '/orders', element: <Orders /> },
					{ path: '/returns', element: <>test</> },
					{ path: '/account', element: <>test</> },
					{ path: '/address', element: <>test</> },
				],
			},
		],
	},
];
