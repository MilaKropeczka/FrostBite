import { SearchBar } from '@/components/SearchBar/SearchBar';
import { Header } from '@/components/Header/Header';
import { Outlet } from 'react-router';
import { CartDrawer } from '@/features/cart';
import { ProductFilterProvider } from '@/contexts/ProductFilterContext';
import Footer from '@/components/Footer/Footer';
import { ProfileDrawer } from '@/features/profile/ProfileDrawer';

export function MainLayout() {
	return (
		<div className='relative w-full min-h-screen flex flex-col items-center bg-gray-100 px-4'>
			<Header />
			<ProductFilterProvider>
				<SearchBar />
				<Outlet />
			</ProductFilterProvider>
			<CartDrawer />
			<ProfileDrawer />
			<Footer />
		</div>
	);
}
