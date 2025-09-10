import { SearchInput, SettingsButton, IconButton } from '@/components/UI';
import { FaCartShopping, FaHeart, FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useCartDrawerStore } from '@/store/useCartDrawerStore';

const icons = [
	{ id: 1, Icon: FaHeart, to: 'favorites', isButton: false },
	{ id: 2, Icon: FaCartShopping, to: 'cart', isButton: true },
	{ id: 3, Icon: FaUser, to: 'profile', isButton: true },
];

const renderIcon = (
	Icon: React.ElementType,
	to: string,
	isButton: boolean,
	toggleDrawer: (drawer: 'cart' | 'profile') => void,
	keyId: number
) => {
	const content = <IconButton Icon={Icon} />;
	return isButton ? (
		<button
			key={keyId}
			onClick={() => toggleDrawer(to as 'cart' | 'profile')}>
			{content}
		</button>
	) : (
		<Link to={to} key={keyId}>
			{content}
		</Link>
	);
};

export const SearchBar = () => {
	const { toggleDrawer } = useCartDrawerStore();
	return (
		<>
			<div className='absolute top-4 right-4 z-50 flex space-x-3 md:hidden'>
				{icons.map(({ id, Icon, to, isButton }) =>
					renderIcon(Icon, to, isButton, toggleDrawer, id)
				)}
			</div>

			<nav className='relative z-10 mt-8 max-w-2xl w-full text-pink-700 rounded-xl flex items-center px-3'>
				<div className='relative flex-grow md:mr-3'>
					<SearchInput />
					<SettingsButton />
				</div>

				<div className='hidden md:flex w-auto justify-end items-center space-x-4'>
					{icons.map(({ id, Icon, to, isButton }) =>
						renderIcon(Icon, to, isButton, toggleDrawer, id)
					)}
				</div>
			</nav>
		</>
	);
};
