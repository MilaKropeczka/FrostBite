import { X, MoveRight, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useShopSlice } from '@/store/useShopSlice';
import { Product } from '../products';
import { useCartDrawerStore } from '@/store/useCartDrawerStore';

export function CartDrawer() {
	const { toggleDrawer, activeDrawer } = useCartDrawerStore();

	const {
		cart,
		removeToCart,
		decrementToCart,
		addToCart,
		setHighlightedId,
		highlightedId,
	} = useShopSlice();

	const handleRemove = (productId: number) => {
		removeToCart(productId);
	};

	const handleDecrement = (product: Product) => {
		const cartProduct = { ...product, quantity: 1 };
		decrementToCart(cartProduct);
	};

	const handleAddCart = (product: Product) => {
		const cartProduct = { ...product, quantity: 1 };
		addToCart(cartProduct);
	};

	const totalPrice = useMemo(() => {
		return cart.reduce(
			(sum, product) => sum + product.price * product.quantity,
			0
		);
	}, [cart]);

	useEffect(() => {
		let timer: NodeJS.Timeout | null = null;

		if (highlightedId !== null) {
			timer = setTimeout(() => setHighlightedId(null), 500);
		}

		return () => {
			if (timer) clearTimeout(timer);
		};
	}, [highlightedId, setHighlightedId]);

	return (
		<div
			className={`fixed top-0 right-0 size-full md:w-100 bg-gray-100/70 backdrop-blur-lg shadow-lg px-4 py-2 flex flex-col z-50 rounded-l-2xl transition-transform duration-300 ease-in-out ${
				activeDrawer === 'cart' ? 'translate-x-0' : 'translate-x-full'
			}`}>
			<div className='flex items-center justify-between mb-6'>
				<h2 className='text-2xl font-semibold text-pink-800'>
					Your Cart
				</h2>
				<button
					onClick={() => toggleDrawer('cart')}
					className='cursor-pointer transition-transform duration-300 hover:-translate-y-1'>
					<X className='w-6 h-6 text-pink-900 hover:text-pink-700' />
				</button>
			</div>

			<div className='flex-1 overflow-y-auto space-y-3 p-4 -m-4 overflow-hidden'>
				{cart.length === 0 ? (
					<p className='text-pink-900/80'>Twój koszyk jest pusty.</p>
				) : (
					<>
						{cart.map((product) => (
							<div
								key={product.id}
								className={`flex items-center gap-4 px-2 py-1 rounded-2xl bg-white/80 shadow-lg hover:-translate-y-1 duration-300 transition cursor-pointer ${
									highlightedId === product.id
										? 'border-2 border-pink-800/80'
										: 'border-2 border-white/80'
								}
	`}>
								<Link to={`/product/${product.id}`}>
									<img
										src={product.image}
										alt={product.name}
										className='w-16 h-16 object-cover rounded-xl'
									/>
								</Link>
								<div className='flex flex-col flex-1'>
									<span className='font-medium text-pink-800'>
										<Link to={`/product/${product.id}`}>
											{product.name}
										</Link>
									</span>
									<div className='flex items-center gap-2 mt-2'>
										<button
											onClick={() =>
												handleDecrement(product)
											}
											className='bg-pink-200 text-pink-800 p-1 rounded hover:bg-pink-300 cursor-pointer transition duration-300'>
											<Minus size={16} />
										</button>
										<span className={'w-6 text-center'}>
											{product.quantity}
										</span>
										<button
											onClick={() =>
												handleAddCart(product)
											}
											className='bg-pink-200 text-pink-800 p-1 rounded hover:bg-pink-300 cursor-pointer transition duration-300'>
											<Plus size={16} />
										</button>
									</div>
								</div>
								<span className='font-semibold text-pink-900'>
									$
									{(product.price * product.quantity).toFixed(
										2
									)}
								</span>

								<button
									className='font-semibold text-pink-900 cursor-pointer'
									onClick={() => handleRemove(product.id)}>
									<Trash2
										size={20}
										className='hover:text-pink-700 transition duration-300 hover:scale-105'
									/>
								</button>
							</div>
						))}
					</>
				)}
			</div>

			<div className='mt-6 border-t pt-2 border-pink-900'>
				<div className='flex justify-between text-lg font-semibold text-pink-900'>
					<span>Total:</span>
					<span>${totalPrice.toFixed(2)}</span>
				</div>
				<Link
					to={cart.length === 0 ? '#' : '/cart'}
					onClick={(e) => {
						if (cart.length === 0) {
							e.preventDefault();
						}
					}}
					className={`mt-4 text-white py-3 w-3/4 rounded-xl hover:brightness-110 font-semibold transition-all duration-300 active:scale-95 flex items-center justify-center mx-auto ${
						cart.length === 0
							? 'bg-pink-700/50 cursor-not-allowed'
							: 'bg-gradient-to-l cursor-pointer from-pink-700 to-pink-800'
					}`}>
					<span>Proceed to Payment</span>
					<MoveRight className='ml-2 text-white' />
				</Link>
			</div>
		</div>
	);
}
