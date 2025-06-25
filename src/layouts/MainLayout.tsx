import { SearchBar } from '@/components/SearchBar/SearchBar';
import { Header } from '@/components/Header/Header';
import { Outlet } from 'react-router';
import { CartDrawer } from '@/features/cart';
import { ProductFilterProvider } from '@/contexts/ProductFilterContext';

export function MainLayout() {
	return (
		<div className='w-full min-h-screen flex flex-col items-center bg-gray-100 px-4'>
			<Header />
			<ProductFilterProvider>
				<SearchBar />
				<Outlet />
			</ProductFilterProvider>
			<CartDrawer />
		</div>
	);
}
