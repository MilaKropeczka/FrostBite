import { Truck, Undo2, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
	{
		icon: <Truck size={32} />,
		title: 'Szybka dostawa',
		desc: 'Twoje zamówienie wysyłamy nawet tego samego dnia – szybko i bezpiecznie prosto pod Twoje drzwi.',
	},
	{
		icon: <Undo2 size={32} />,
		title: 'Zwroty 14 dni',
		desc: 'Masz 14 dni na zwrot bez podawania przyczyny. Zakupy bez stresu i zbędnych formalności.',
	},
	{
		icon: <CreditCard size={32} />,
		title: 'Bezpieczne płatności',
		desc: 'Wszystkie transakcje są szyfrowane i zabezpieczone - możesz kupować bez obaw.',
	},
];

export function InfoFooter() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className='max-w-6xl flex gap-6 justify-center mb-30'>
			{features.map(({ icon, title, desc }) => (
				<div
					key={title}
					className='w-72 bg-gradient-to-br from-grey-50 to-pink-100 rounded-xl ring ring-pink-200 p-6 hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center shadow-lg'>
					<div className='mb-2 text-pink-700'>{icon}</div>
					<h3 className='text-xl font-semibold mb-2 text-pink-900'>
						{title}
					</h3>
					<p className='text-sm text-pink-900'>{desc}</p>
				</div>
			))}
		</motion.section>
	);
}
