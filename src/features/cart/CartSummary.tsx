import { useState } from 'react';
import { Product } from '../products';
import { useProductFilter } from '@/contexts/ProductFilterContext';

const OrderSummary = ({ products }: { products: Product[] }) => (
	<section>
		<h2>Twoje produkty</h2>
		<ul>
			{products.map((p) => (
				<li key={p.id}>
					{p.name} – {p.price} zł
				</li>
			))}
		</ul>
	</section>
);

const OptionSelector = ({
	title,
	options,
	selected,
	onSelect,
}: {
	title: string;
	options: { label: string; value: string }[];
	selected: string;
	onSelect: (value: string) => void;
}) => (
	<section>
		<h2>{title}</h2>
		{options.map((opt) => (
			<label
				key={opt.value}
				style={{ display: 'block', marginBottom: 4 }}>
				<input
					type='radio'
					name={title}
					value={opt.value}
					checked={selected === opt.value}
					onChange={() => onSelect(opt.value)}
				/>
				{opt.label}
			</label>
		))}
	</section>
);

const FinalizeButton = ({ onClick }: { onClick: () => void }) => (
	<button onClick={onClick}>Zamawiam i płacę</button>
);

const CheckoutPage = () => {
	const [selectedPayment, setSelectedPayment] = useState('card');
	const [selectedShipping, setSelectedShipping] = useState('kurier');
	const products = useProductFilter();

	const handleOrder = () => {
		console.log('Płatność:', selectedPayment);
		console.log('Dostawa:', selectedShipping);
		console.log('Produkty:', products);
	};

	return (
		<div>
			<OrderSummary products={products} />
			<OptionSelector
				title='Metoda płatności'
				selected={selectedPayment}
				onSelect={setSelectedPayment}
				options={[
					{ label: 'Karta płatnicza', value: 'card' },
					{ label: 'BLIK', value: 'blik' },
				]}
			/>

			<OptionSelector
				title='Opcja dostawy'
				selected={selectedShipping}
				onSelect={setSelectedShipping}
				options={[
					{ label: 'Kurier', value: 'kurier' },
					{ label: 'Paczkomat', value: 'paczkomat' },
				]}
			/>
			<FinalizeButton onClick={handleOrder} />
		</div>
	);
};

export default CheckoutPage;
