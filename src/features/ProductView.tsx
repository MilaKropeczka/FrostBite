import Img1 from '@/assets/1.jpg';
import Button from '@/components/UI/Button';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export function ProductView() {
	return (
		<div className='flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto mt-10 gap-10 bg-white shadow-2xl rounded-2xl overflow-hidden mb-10'>
			<div className='w-full md:w-1/2 overflow-hidden aspect-[19/20] relative'>
				<img
					src={Img1}
					alt='iceCream'
					className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
				/>

				<Link
					to='/'
					className='absolute top-4 left-4 flex items-center gap-2 bg-white bg-opacity-70 rounded-full px-5 py-1 shadow-xl text-pink-700 hover:bg-opacity-90 hover:text-pink-900 font-semibold cursor-pointer'>
					<FiArrowLeft size={20} />
					<span className='leading-relaxed'>Back</span>
				</Link>
			</div>

			<div className='w-full md:flex-1 flex flex-col justify-center gap-y-4 px-8 py-6'>
				<h2 className='text-2xl font-semibold text-neutral-900'>
					Chocolate Ice Cream
				</h2>

				<p className='text-3xl font-bold text-pink-700'>$4.20</p>

				<h3 className='text-neutral-600 font-medium'>
					Indulge in creamy perfection
				</h3>

				<p className='text-sm text-neutral-700 leading-relaxed'>
					Our chocolate ice cream is a true delight for the senses.
					Made with rich Belgian chocolate, it offers an intense
					flavor that melts effortlessly on your tongue. Each scoop
					blends deep cocoa notes with a velvety texture, delivering a
					moment of pure pleasure. No artificial additives – just real
					chocolate, fresh milk, and a touch of magic. Perfect for
					lifting your mood, finishing a great meal, or simply...
					because you deserve it.
				</p>

				<Button
					className='mt-6 w-full sm:w-1/2 px-6 py-3 text-base font-semibold shadow-xl'
					onClick={() => console.log('test')}>
					Purchase Now
				</Button>
			</div>
		</div>
	);
}
