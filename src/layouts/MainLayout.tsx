import { SearchBar } from '@/features/SearchBar';
import { Categories } from '@/features/Categories';
import { Header } from '@/features/Header';
import { Outlet } from 'react-router';

export function MainLayout() {
	return (
		<div className='w-full min-h-screen flex flex-col items-center bg-gray-100'>
			<Header />
			<SearchBar />
			<Categories />
			<Outlet />
		</div>
	);
}
