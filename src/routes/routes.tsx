import { RouteObject } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { ProductSection } from '@/features/ProductSection';
import { Favorites } from '@/features/Favorites';
import { Cart } from '@/features/Cart';
import { ProductView } from '@/features/ProductView';

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
					{ path: '/product', element: <ProductView /> },
				],
			},
		],
	},
];
