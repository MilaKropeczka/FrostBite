import { RouteObject } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { ProductSection } from '@/features/products';
import { Favorites } from '@/features/favorites';
import { CartSummary } from '@/features/cart';
import { ProductView } from '@/features/products';
import { Address } from '@/features/profile/address/Address';
import { DetailsAccount } from '@/features/profile/detailsAccount/DetailsAccount';
import { ProtectedLayout } from '@/components/ProtectedLayout.tsx/ProtectedLayout';
import { LoginView } from '@/components/LoginView/LoginView';
import { TransactionList } from '@/components/TransactionItem/TransactionList';

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
					{ path: '/login', element: <LoginView /> },
					{
						element: <ProtectedLayout />,
						children: [
							{
								path: '/orders',
								element: <TransactionList type='orders' />,
							},
							{
								path: '/returns',
								element: <TransactionList type='returns' />,
							},
							{ path: '/account', element: <DetailsAccount /> },
							{ path: '/address', element: <Address /> },
						],
					},
				],
			},
		],
	},
];
