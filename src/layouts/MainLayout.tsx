import { SearchBar } from '@/components/SearchBar/SearchBar';
import { Categories } from '@/features/products/Categories/Categories';
import { Header } from '@/components/Header/Header';
import { Outlet } from 'react-router';
import { CartDrawer } from '@/features/cart';
import { useCartDrawer } from '@/hooks/useCartDrawer';
import { ProductFilterProvider } from '@/contexts/ProductFilterContext';

export function MainLayout() {
	const { isOpen, openDrawer, closeDrawer } = useCartDrawer();
	return (
		<div className='w-full min-h-screen flex flex-col items-center bg-gray-100'>
			<Header />
			<SearchBar openDrawer={openDrawer} />
			<ProductFilterProvider>
				<Categories />
				<Outlet />
			</ProductFilterProvider>
			<CartDrawer isOpen={isOpen} closeDrawer={closeDrawer} />
		</div>
	);
}
