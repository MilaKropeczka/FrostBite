import { RouteObject } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { ProductSection } from '@/features/product/ProductSection/ProductSection';
import { Favorites } from '@/features/Favorites';
import { Cart } from '@/features/cart';
import { ProductView } from '@/features/product/ProductView/ProductView';

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
