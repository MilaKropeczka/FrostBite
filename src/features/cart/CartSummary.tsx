import { useMemo, useState } from 'react';
import { useShopSlice } from '@/store/useShopSlice';
import { Link } from 'react-router-dom';
import { CreditCard, Banknote, Smartphone } from 'lucide-react';
import { Truck, PackageCheck, Store } from 'lucide-react';
import { Button } from '@/components/UI';

export function CartSummary() {
	const { cart } = useShopSlice();

	const [shipping, setShipping] = useState<'kurier' | 'paczkomat'>('kurier');
	const [payment, setPayment] = useState<'karta' | 'blik' | 'przelew'>(
		'karta'
	);

	const shippingMethods = [
		{
			id: 'kurier',
			label: 'Kurier',
			price: '15 zł',
			icon: <Truck className='w-5 h-5 text-pink-700' />,
		},
		{
			id: 'paczkomat',
			label: 'Paczkomat InPost',
			price: '10 zł',
			icon: <PackageCheck className='w-5 h-5 text-pink-700' />,
		},
		{
			id: 'odbior',
			label: 'Odbiór osobisty (Warszawa)',
			price: '0 zł',
			icon: <Store className='w-5 h-5 text-pink-700' />,
		},
	];

	const paymentMethods = [
		{
			id: 'karta',
			label: 'Karta płatnicza',
			icon: <CreditCard className='w-5 h-5 text-pink-700' />,
		},
		{
			id: 'blik',
			label: 'BLIK',
			icon: <Smartphone className='w-5 h-5 text-pink-700' />,
		},
		{
			id: 'przelew',
			label: 'Przelew bankowy (Przelewy24)',
			icon: <Banknote className='w-5 h-5 text-pink-700' />,
		},
	];

	const totalPrice = useMemo(() => {
		return cart.reduce(
			(sum, product) => sum + product.price * product.quantity,
			0
		);
	}, [cart]);

	const shippingCost = shipping === 'kurier' ? 15 : 10;
	const finalPrice = (totalPrice + shippingCost).toFixed(2);

	const handlePlaceOrder = () => {
		alert(`Zamówienie złożone!`);
	};

	return (
		<div className='min-w-3xl mx-auto p-6 space-y-12 mb-12'>
			<div className='space-y-4'>
				<h2 className='text-2xl text-center font-bold text-pink-800 mt-6'>
					Finalizacja zamówienia
				</h2>
				<h3 className='text-xl font-semibold text-pink-700'>
					Produkty
				</h3>
				{cart.map((product) => (
					<div
						key={product.id}
						className='flex items-center justify-between bg-white p-4 rounded-xl shadow-lg border border-gray-300'>
						<div className='flex items-center gap-4'>
							<img
								src={product.image}
								alt={product.name}
								className='w-16 h-16 rounded-lg object-cover'
							/>
							<div>
								<p className='font-medium text-pink-900'>
									{product.name}
								</p>
								<p className='text-sm text-gray-600'>
									Ilość: {product.quantity}
								</p>
							</div>
						</div>
						<p className='font-semibold text-pink-800'>
							${(product.price * product.quantity).toFixed(2)}
						</p>
					</div>
				))}
			</div>
			<div>
				<h3 className='text-xl font-semibold text-pink-700 mb-4'>
					Metoda wysyłki
				</h3>
				<div className='grid gap-4'>
					{shippingMethods.map((method) => (
						<label
							key={method.id}
							className={`flex items-center gap-3 border rounded-2xl p-4 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-lg ${
								shipping === method.id
									? 'border-pink-700 bg-pink-50'
									: 'border-gray-300 bg-white'
							}`}>
							<input
								type='radio'
								name='shipping'
								checked={shipping === method.id}
								onChange={() => setShipping(method.id)}
								className='accent-pink-700 w-5 h-5'
							/>
							{method.icon}
							<div className='flex flex-col'>
								<span className='text-base font-medium'>
									{method.label}
								</span>
								<span className='text-sm text-gray-600'>
									{method.price}
								</span>
							</div>
						</label>
					))}
				</div>
			</div>
			<div>
				<h3 className='text-xl font-semibold text-pink-700 mb-4'>
					Metoda płatności
				</h3>
				<div className='grid gap-4'>
					{paymentMethods.map((method) => (
						<label
							key={method.id}
							className={`flex items-center gap-3 border rounded-2xl p-4 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-lg ${
								payment === method.id
									? 'border-pink-700 bg-pink-50'
									: 'border-gray-300 bg-white'
							}`}>
							<input
								type='radio'
								name='payment'
								checked={payment === method.id}
								onChange={() => setPayment(method.id)}
								className='accent-pink-700 w-5 h-5'
							/>
							{method.icon}
							<span className='text-base font-medium'>
								{method.label}
							</span>
						</label>
					))}
				</div>
			</div>
			<div className='bg-pink-100 p-4 rounded-xl shadow-lg text-pink-900 space-y-2 ring ring-pink-700 shadow-lg-pink-950/20'>
				<p className='flex justify-between'>
					<span>Suma produktów:</span>
					<span>${totalPrice.toFixed(2)}</span>
				</p>
				<p className='flex justify-between'>
					<span>Wysyłka:</span>
					<span>${shippingCost.toFixed(2)}</span>
				</p>
				<hr className='text-pink-800' />
				<p className='flex justify-between font-bold text-lg'>
					<span>Do zapłaty:</span>
					<span>${finalPrice}</span>
				</p>
			</div>
			<Button
				onClick={handlePlaceOrder}
				className='w-full py-3 font-semibold max-w-full'>
				Złóż zamówienie
			</Button>
		</div>
	);
}
