import { SearchBar } from '@/features/SearchBar';
import { Outlet } from 'react-router';

export function SecondaryLayout() {
	return (
		<div className='w-full min-h-screen flex flex-col items-center bg-gray-100'>
			<SearchBar />
			<Outlet />
		</div>
	);
}
