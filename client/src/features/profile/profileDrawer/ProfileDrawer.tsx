import { X, User, Package, Undo2, MapPin, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartDrawerStore } from '@/store/useCartDrawerStore';
import { useAuth } from '@/hooks/useAuth';
import { toast } from '@/hooks/useToaster';
import { useNavigate } from 'react-router-dom';

function DrawerLink({
	to,
	children,
	onClick,
}: {
	to: string;
	children: React.ReactNode;
	onClick: () => void;
}) {
	return (
		<Link
			to={to}
			onClick={onClick}
			className='flex items-center gap-3 text-pink-900 font-medium bg-white/80 shadow-lg py-3 px-4 rounded-2xl transition duration-300 hover:translate-x-1 hover:bg-white'>
			{children}
		</Link>
	);
}

export function ProfileDrawer() {
	const { activeDrawer, toggleDrawer } = useCartDrawerStore();
	const { isLoggedIn, logout } = useAuth();
	const navigate = useNavigate();

	const profileLinks = [
		{ to: '/orders', label: 'My Orders', icon: <Package size={20} /> },
		{ to: '/returns', label: 'My Returns', icon: <Undo2 size={20} /> },
		{
			to: '/account',
			label: 'My Account Details',
			icon: <User size={20} />,
		},
		{
			to: '/address',
			label: 'Delivery Address',
			icon: <MapPin size={20} />,
		},
	];

	const handleLogout = () => {
		logout();
		toggleDrawer(null);
		toast.warning('Successfully logged out');
		navigate('/');
	};

	return (
		<div
			className={`fixed top-0 right-0 size-full md:w-80 bg-gray-100/70 backdrop-blur-lg shadow-lg px-4 py-2 flex flex-col z-50 rounded-l-2xl transition-transform duration-300 ease-in-out ${
				activeDrawer === 'profile'
					? 'translate-x-0'
					: 'translate-x-full'
			}`}>
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-2xl font-semibold text-pink-800'>
					{isLoggedIn ? 'My profile' : 'Welcome'}
				</h2>
				<button
					onClick={() => toggleDrawer('profile')}
					className='cursor-pointer transition-transform duration-300 hover:-translate-y-1'>
					<X className='size-6 text-pink-900 hover:text-pink-700' />
				</button>
			</div>

			<div className='flex flex-col gap-4 flex-grow'>
				{isLoggedIn ? (
					<>
						{profileLinks.map(({ to, label, icon }) => (
							<Link
								key={to}
								to={to}
								onClick={() => toggleDrawer(null)}
								className='flex items-center gap-3 text-pink-900 font-medium bg-white/80 shadow-lg py-3 px-4 rounded-2xl hover:translate-x-1 transition duration-300'>
								{icon}
								<span>{label}</span>
							</Link>
						))}
					</>
				) : (
					<>
						<DrawerLink
							to='/login'
							onClick={() => toggleDrawer(null)}>
							<span className='w-full text-center'>Login</span>
						</DrawerLink>
						<DrawerLink
							to='/register'
							onClick={() => toggleDrawer(null)}>
							<span className='w-full text-center'>Register</span>
						</DrawerLink>
					</>
				)}
			</div>
			{isLoggedIn && (
				<>
					<hr className='text-pink-800/40 mb-2' />
					<button
						onClick={handleLogout}
						className='flex items-center justify-center gap-3 w-full text-pink-900 font-medium bg-white shadow-lg py-3 px-4 rounded-2xl hover:translate-x-1 transition duration-300 cursor-pointer'>
						<LogOut size={20} />
						<span>Logout</span>
					</button>
				</>
			)}
		</div>
	);
}
