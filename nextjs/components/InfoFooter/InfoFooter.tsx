import { Truck, Undo2, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
	{
		icon: <Truck size={32} />,
		title: 'Fast Delivery',
		desc: 'We ship your order even on the same day – fast and safely straight to your door.',
	},
	{
		icon: <Undo2 size={32} />,
		title: '14-Day Returns',
		desc: 'You have 14 days to return without giving a reason. Stress-free shopping with no hassle.',
	},
	{
		icon: <CreditCard size={32} />,
		title: 'Secure Payments',
		desc: 'All transactions are encrypted and secure – shop with confidence.',
	},
];

export function InfoFooter() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className='max-w-6xl mx-auto flex flex-col md:flex-row gap-6 px-8 lg:px-20 justify-center mb-24'>
			{features.map(({ icon, title, desc }) => (
				<div
					key={title}
					className='bg-gradient-to-br from-gray-50 to-pink-100 rounded-xl ring ring-pink-200 px-10 py-3 lg:p-6 hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center shadow-lg '>
					<div className='mb-3 text-pink-700'>{icon}</div>
					<h3 className='text-xl font-semibold mb-2 text-pink-900'>
						{title}
					</h3>
					<p className='text-sm text-pink-900'>{desc}</p>
				</div>
			))}
		</motion.section>
	);
}
