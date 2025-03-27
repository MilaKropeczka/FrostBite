import { FaStar } from 'react-icons/fa';
import organicFruitImage1 from '../assets/1.jpg';
import organicFruitImage2 from '../assets/2.jpg';
import organicFruitImage3 from '../assets/3.jpg';
import organicFruitImage4 from '../assets/4.jpg';
import organicFruitImage5 from '../assets/5.jpg';
import organicFruitImage6 from '../assets/6.jpg';
import organicFruitImage7 from '../assets/7.jpg';
import organicFruitImage8 from '../assets/8.jpg';

const products = [
	{
		id: 1,
		name: 'Chocolate',
		image: organicFruitImage1,
		price: '$52.90',
		stars: 4,
	},
	{
		id: 2,
		name: 'Strawberry',
		image: organicFruitImage2,
		price: '$45.50',
		stars: 5,
	},
	{
		id: 3,
		name: 'Mint',
		image: organicFruitImage3,
		price: '$39.99',
		stars: 3,
	},
	{
		id: 4,
		name: 'Banana',
		image: organicFruitImage4,
		price: '$39.99',
		stars: 5,
	},
	{
		id: 5,
		name: 'Blueberry',
		image: organicFruitImage5,
		price: '$39.99',
		stars: 5,
	},
	{
		id: 6,
		name: 'Waffles',
		image: organicFruitImage6,
		price: '$39.99',
		stars: 5,
	},
	{
		id: 7,
		name: 'Waffles',
		image: organicFruitImage7,
		price: '$39.99',
		stars: 5,
	},
	{
		id: 8,
		name: 'Waffles',
		image: organicFruitImage8,
		price: '$39.99',
		stars: 5,
	},
];

export default function Section() {
	return (
		<section className='flex flex-col items-center px-2 sm:px-4 w-full'>
			<h2 className='text-xl tracking-tight mt-12 px-4 sm:px-0 font-semibold relative bg-gradient-to-r from-pink-700 to-pink-950 text-transparent bg-clip-text inline-block'>
				Popular
			</h2>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-4 w-full max-w-6xl px-10 sm:px-4'>
				{products.map((product) => (
					<div
						key={product.id}
						className='bg-white rounded-2xl shadow-xl w-full flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 justify-end mb-3'>
						<div className='w-full h-48 overflow-hidden rounded-t-xl'>
							<img
								src={product.image}
								alt={product.name}
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='text-center p-3'>
							<p className='text-pink-700 font-semibold text-lg'>
								{product.name}
							</p>
							<div className='flex items-center justify-center gap-1 text-pink-500 mt-1'>
								{[...Array(product.stars)].map((_, index) => (
									<FaStar key={index} className='text-md' />
								))}
								{[...Array(5 - product.stars)].map(
									(_, index) => (
										<FaStar
											key={index}
											className='text-md text-gray-300'
										/>
									)
								)}
								<span>4.2</span>
							</div>
							<span className='text-gray-700 text-lg font-bold mt-1 block'>
								{product.price}
							</span>
						</div>

						<button className='rounded-xl px-6 py-2 text-white cursor-pointer transition-all duration-200 active:scale-95 w-full max-w-3/4 bg-gradient-to-l from-pink-700 to-pink-800 mb-2 hover:text-pink-200'>
							Add to cart
						</button>
					</div>
				))}
			</div>
		</section>
	);
}
