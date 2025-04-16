import { SearchInput } from '@/components/UI/SearchInput';
import { SettingsButton } from '@/components/UI/SettingsButton';
import { IconButton } from '@/components/UI/IconButton';
import { FaCartShopping, FaHeart } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const icons = [
	{ id: 1, Component: FaHeart, to: 'favorites' },
	{ id: 2, Component: FaCartShopping, to: 'cart' },
];

export const SearchBar = () => {
	return (
		<nav className='relative z-10 mt-8 max-w-xl w-full text-pink-700 rounded-xl flex items-center space-x-2 md:space-x-3'>
			<div className='relative flex-grow'>
				<SearchInput />
				<SettingsButton />
			</div>
			<div className='flex items-center space-x-2 sm:space-x-3 h-full'>
				{icons.map(({ id, Component, to }) => (
					<Link key={id} to={to}>
						<IconButton Icon={Component} />
					</Link>
				))}
			</div>
		</nav>
	);
};
