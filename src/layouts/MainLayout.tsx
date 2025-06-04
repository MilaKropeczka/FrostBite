import { SearchBar } from '@/components/SearchBar/SearchBar';
import { Header } from '@/components/Header/Header';
import { Outlet } from 'react-router';
import { CartDrawer } from '@/features/cart';
import { useCartDrawer } from '@/hooks/useCartDrawer';
import { ProductFilterProvider } from '@/contexts/ProductFilterContext';

export function MainLayout() {
	const { isOpen, toggleDrawer } = useCartDrawer();
	return (
		<div className='w-full min-h-screen flex flex-col items-center bg-gray-100'>
			<Header />
			<SearchBar toggleDrawer={toggleDrawer} />
			<ProductFilterProvider>
				<Outlet />
			</ProductFilterProvider>
			<CartDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
		</div>
	);
}
