import { X, MoveRight, Minus, Plus, Trash2 } from 'lucide-react';
import img1 from '@/assets/1.jpg';
import { Link } from 'react-router-dom';

type CartDrawerProps = {
	isOpen: boolean;
	closeDrawer: () => void;
};

export function CartDrawer({ isOpen, closeDrawer }: CartDrawerProps) {
	const totalPrice = 250;

	return (
		<div
			className={`fixed top-0 right-0 h-full w-100 bg-gray-100/70 backdrop-blur-lg shadow-xl px-4 py-2 flex flex-col z-50 rounded-l-2xl transition-transform duration-300 ease-in-out ${
				isOpen ? 'translate-x-0' : 'translate-x-full'
			}`}>
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-2xl font-semibold text-pink-800'>
					Your Cart
				</h2>
				<button
					onClick={closeDrawer}
					className='cursor-pointer transition-transform duration-300 hover:-translate-y-1'>
					<X className='w-6 h-6 text-pink-900 hover:text-pink-700' />
				</button>
			</div>

			<div className='flex-1 overflow-y-auto space-y-3 p-4 -m-4'>
				<div
					key={15454}
					className='flex items-center gap-4 p-2 rounded-2xl bg-white/80 shadow-xl hover:-translate-y-1 duration-300 transition cursor-pointer'>
					<img
						src={img1}
						alt={'product'}
						className='w-16 h-16 object-cover rounded-xl'
					/>
					<div className='flex flex-col flex-1'>
						<span className='font-medium text-pink-800'>
							Product Name
						</span>
						<div className='flex items-center gap-2 mt-2'>
							<button
								onClick={() => console.log('object')}
								className='bg-pink-200 text-pink-800 p-1 rounded hover:bg-pink-300 cursor-pointer transition duration-300'>
								<Minus size={16} />
							</button>
							<span className='w-6 text-center'>2</span>
							<button
								onClick={() => console.log(`object`)}
								className='bg-pink-200 text-pink-800 p-1 rounded hover:bg-pink-300 cursor-pointer transition duration-300'>
								<Plus size={16} />
							</button>
						</div>
					</div>
					<span className='font-semibold text-pink-900'>$12</span>

					<span className='font-semibold text-pink-900'>
						<Trash2
							size={20}
							className='hover:text-pink-700 transition duration-300 hover:scale-105'
						/>
					</span>
				</div>
			</div>

			<div className='mt-6 border-t pt-2 border-pink-900'>
				<div className='flex justify-between text-lg font-semibold text-pink-900'>
					<span>Total:</span>
					<span>{totalPrice.toFixed(2)} $</span>
				</div>
				<Link
					to={'/cart'}
					className='mt-4 text-white py-3 w-3/4 rounded-xl bg-gradient-to-l from-pink-700 to-pink-800 hover:brightness-110 font-semibold transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center mx-auto'>
					<span>Proceed to Payment</span>
					<MoveRight className='ml-2 text-white' />
				</Link>
			</div>
		</div>
	);
}
