import { CartDrawer } from '@/features/CartDrawer';
import { SearchBar } from '@/features/SearchBar';
import { Outlet } from 'react-router';
import { useCartDrawer } from '@/hooks/useCartDrawer';

export function SecondaryLayout() {
	const { isOpen, openDrawer, closeDrawer } = useCartDrawer();
	return (
		<div className='w-full min-h-screen flex flex-col items-center bg-gray-100'>
			<SearchBar openDrawer={openDrawer} />
			<Outlet />
			<CartDrawer isOpen={isOpen} closeDrawer={closeDrawer} />
		</div>
	);
}
