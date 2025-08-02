import { RouteObject } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { ProductSection } from '@/features/products';
import { Favorites } from '@/features/favorites';
import { CartSummary } from '@/features/cart';
import { ProductView } from '@/features/products';
import { Orders } from '@/features/profile/orders/Orders';

export const routes: RouteObject[] = [
	{
		children: [
			{
				element: <MainLayout />,
				children: [
					{ path: '/', element: <ProductSection /> },
					{ path: '/favorites', element: <Favorites /> },
					{ path: '/cart', element: <CartSummary /> },
					{ path: '/product/:productId', element: <ProductView /> },
					{ path: '/orders', element: <Orders /> },
					{ path: '/returns', element: <>In progress</> },
					{ path: '/account', element: <>In progress</> },
					{ path: '/address', element: <>In progress</> },
				],
			},
		],
	},
];
