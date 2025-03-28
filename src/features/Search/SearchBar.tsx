import { SearchInput } from '../../components/UI/SearchInput';
import { SettingsButton } from '../../components/UI/SettingsButton';
import { IconButton } from '../../components/UI/IconButton';
import { FaCartShopping, FaHeart } from 'react-icons/fa6';

const icons = [
	{ id: 1, Component: FaHeart },
	{ id: 2, Component: FaCartShopping },
];

export const SearchBar = () => {
	return (
		<nav className='relative z-10 mt-8 max-w-xl w-full text-pink-700 rounded-xl flex items-center space-x-2 md:space-x-3'>
			<div className='relative flex-grow'>
				<SearchInput />
				<SettingsButton />
			</div>
			<div className='flex items-center space-x-2 sm:space-x-3 h-full'>
				{icons.map(({ id, Component }) => (
					<IconButton key={id} Icon={Component} />
				))}
			</div>
		</nav>
	);
};
