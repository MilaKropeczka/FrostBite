import { SearchInput, SettingsButton, IconButton } from '@/components/UI';
import { FaCartShopping, FaHeart } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useCartDrawerStore } from '@/store/useCartDrawerStore';

const icons = [
	{ id: 1, Icon: FaHeart, to: 'favorites', isButton: false },
	{ id: 2, Icon: FaCartShopping, to: 'cart', isButton: true },
];

const renderIcon = (
	Icon: React.ElementType,
	to: string,
	isButton: boolean,
	toggleDrawer: () => void
) => {
	const content = <IconButton Icon={Icon} />;
	return isButton ? (
		<button onClick={toggleDrawer}>{content}</button>
	) : (
		<Link to={to}>{content}</Link>
	);
};

export const SearchBar = () => {
	const { toggleDrawer } = useCartDrawerStore();
	return (
		<>
			<div className='absolute top-4 right-4 z-50 flex space-x-3 md:hidden'>
				{icons.map(({ Icon, to, isButton }) =>
					renderIcon(Icon, to, isButton, toggleDrawer)
				)}
			</div>

			<nav className='relative z-10 mt-8 max-w-xl w-full text-pink-700 rounded-xl flex items-center space-x-2 md:space-x-3'>
				<div className='relative flex-grow'>
					<SearchInput />
					<SettingsButton />
				</div>

				<div className='hidden md:flex w-auto justify-end items-center space-x-4'>
					{icons.map(({ Icon, to, isButton }) =>
						renderIcon(Icon, to, isButton, toggleDrawer)
					)}
				</div>
			</nav>
		</>
	);
};
