import { SearchBar } from '@/features/SearchBar';
import { Categories } from '@/features/Categories';
import { Header } from '@/features/Header';
import { Outlet } from 'react-router';
import { CartDrawer } from '@/features/CartDrawer';
import { useCartDrawer } from '@/hooks/useCartDrawer';

export function MainLayout() {
	const { isOpen, openDrawer, closeDrawer } = useCartDrawer();
	return (
		<div className='w-full min-h-screen flex flex-col items-center bg-gray-100'>
			<Header />
			<SearchBar openDrawer={openDrawer} />
			<Categories />
			<Outlet />
			<CartDrawer isOpen={isOpen} closeDrawer={closeDrawer} />
		</div>
	);
}
