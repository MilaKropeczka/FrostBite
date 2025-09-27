import { SearchBar } from '@/components/SearchBar';
import { Header } from '@/components/Header';
import { CartDrawer } from '@/features/cart';
import { ProductFilterProvider } from '@/contexts/ProductFilterProvider';
import { Footer } from '@/components/Footer';
import { ProfileDrawer } from '@/features/profile/profileDrawer/ProfileDrawer';
import { Toaster } from '@/components/UI';

export function MainLayout({ children }) {
	return (
		<div className='relative w-full min-h-screen flex flex-col items-center bg-gray-100'>
			<Header />
			<ProductFilterProvider>
				<SearchBar />
				{children}
			</ProductFilterProvider>
			<CartDrawer />
			<ProfileDrawer />
			<Footer />
			<Toaster />
		</div>
	);
}
