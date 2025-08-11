import { useState, useMemo, ReactNode } from 'react';
import {
	CreditCard,
	Banknote,
	Smartphone,
	Truck,
	PackageCheck,
	Store,
} from 'lucide-react';
import { Button } from '@/components/UI';
import { CartProduct, useShopSlice } from '@/store/useShopSlice';

const OrderSummary = ({ products }: { products: CartProduct[] }) => {
	const totalPrice = useMemo(
		() => products.reduce((sum, p) => sum + p.price * p.quantity, 0),
		[products]
	);

	return (
		<section className='space-y-4'>
			<h2 className='text-2xl text-center font-bold text-pink-800 mt-6'>
				Order Summary
			</h2>
			<h3 className='text-xl font-semibold text-pink-700'>Products</h3>
			{products.map((product) => (
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
								Quantity: {product.quantity}
							</p>
						</div>
					</div>
					<p className='font-semibold text-pink-800'>
						${(product.price * product.quantity).toFixed(2)}
					</p>
				</div>
			))}
			<p className='text-right font-bold text-pink-800'>
				Total: ${totalPrice.toFixed(2)}
			</p>
		</section>
	);
};

const OptionSelector = ({
	title,
	options,
	selected,
	onSelect,
}: {
	title: string;
	options: {
		label: string;
		value: string;
		icon?: ReactNode;
		price?: string;
	}[];
	selected: string;
	onSelect: (value: string) => void;
}) => (
	<section>
		<h3 className='text-xl font-semibold text-pink-700 mb-4'>{title}</h3>
		<div className='grid gap-4'>
			{options.map((opt) => (
				<label
					key={opt.value}
					className={`flex items-center gap-3 border rounded-2xl p-4 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-lg ${
						selected === opt.value
							? 'border-pink-700 bg-pink-50'
							: 'border-gray-300 bg-white'
					}`}>
					<input
						type='radio'
						name={title}
						value={opt.value}
						checked={selected === opt.value}
						onChange={() => onSelect(opt.value)}
						className='accent-pink-700 w-5 h-5'
					/>
					{opt.icon}
					<div className='flex flex-col'>
						<span className='text-base font-medium'>
							{opt.label}
						</span>
						{opt.price && (
							<span className='text-sm text-gray-600'>
								{opt.price}
							</span>
						)}
					</div>
				</label>
			))}
		</div>
	</section>
);

const FinalizeButton = ({ onClick }: { onClick: () => void }) => (
	<Button
		onClick={onClick}
		className='w-full py-3 font-semibold max-w-full mt-4'>
		Place Order and Pay
	</Button>
);

export const CartSummary = () => {
	const [selectedPayment, setSelectedPayment] = useState('card');
	const [selectedShipping, setSelectedShipping] = useState('courier');
	const { cart: products } = useShopSlice();

	const shippingMethods = [
		{
			value: 'courier',
			label: 'Courier',
			price: '$15.00',
			icon: <Truck className='w-5 h-5 text-pink-700' />,
		},
		{
			value: 'locker',
			label: 'InPost Locker',
			price: '$10.00',
			icon: <PackageCheck className='w-5 h-5 text-pink-700' />,
		},
		{
			value: 'pickup',
			label: 'Pickup (Warsaw)',
			price: '$0.00',
			icon: <Store className='w-5 h-5 text-pink-700' />,
		},
	];

	const paymentMethods = [
		{
			value: 'card',
			label: 'Credit Card',
			icon: <CreditCard className='w-5 h-5 text-pink-700' />,
		},
		{
			value: 'blik',
			label: 'BLIK',
			icon: <Smartphone className='w-5 h-5 text-pink-700' />,
		},
		{
			value: 'transfer',
			label: 'Bank Transfer (Przelewy24)',
			icon: <Banknote className='w-5 h-5 text-pink-700' />,
		},
	];

	const totalPrice = useMemo(
		() => products.reduce((sum, p) => sum + p.price * p.quantity, 0),
		[products]
	);

	const shippingCost =
		selectedShipping === 'courier'
			? 15
			: selectedShipping === 'locker'
			? 10
			: 0;

	const finalPrice = (totalPrice + shippingCost).toFixed(2);

	const handleOrder = () => {
		console.log('Payment method:', selectedPayment);
		console.log('Shipping method:', selectedShipping);
		console.log('Products:', products);
		alert('Order placed successfully!');
	};

	return (
		<div className='w-full lg:w-auto lg:min-w-3xl mx-auto p-6 space-y-12 mb-12'>
			<OrderSummary products={products} />
			<OptionSelector
				title='Shipping Method'
				options={shippingMethods}
				selected={selectedShipping}
				onSelect={setSelectedShipping}
			/>
			<OptionSelector
				title='Payment Method'
				options={paymentMethods}
				selected={selectedPayment}
				onSelect={setSelectedPayment}
			/>
			<div className='bg-pink-100 p-4 rounded-xl shadow-lg text-pink-900 space-y-2 ring ring-pink-700 shadow-lg-pink-950/20'>
				<p className='flex justify-between'>
					<span>Products total:</span>
					<span>${totalPrice.toFixed(2)}</span>
				</p>
				<p className='flex justify-between'>
					<span>Shipping:</span>
					<span>${shippingCost.toFixed(2)}</span>
				</p>
				<hr className='text-pink-800' />
				<p className='flex justify-between font-bold text-lg'>
					<span>Total to pay:</span>
					<span>${finalPrice}</span>
				</p>
			</div>
			<FinalizeButton onClick={handleOrder} />
		</div>
	);
};
