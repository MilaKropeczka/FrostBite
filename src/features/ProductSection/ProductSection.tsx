import ProductCard from '../../components/ProductCard/ProductCard';
import organicFruitImage1 from '../../assets/1.jpg';
import organicFruitImage2 from '../../assets/2.jpg';
import organicFruitImage3 from '../../assets/3.jpg';
import organicFruitImage4 from '../../assets/4.jpg';
import organicFruitImage5 from '../../assets/5.jpg';
import organicFruitImage6 from '../../assets/6.jpg';
import organicFruitImage7 from '../../assets/7.jpg';
import organicFruitImage8 from '../../assets/8.jpg';

const products = [
	{
		id: 1,
		name: 'Chocolate',
		image: organicFruitImage1,
		price: '$5.90',
		stars: 4,
	},
	{
		id: 2,
		name: 'Strawberry',
		image: organicFruitImage2,
		price: '$4.10',
		stars: 5,
	},
	{
		id: 3,
		name: 'Mint',
		image: organicFruitImage3,
		price: '$3.99',
		stars: 3,
	},
	{
		id: 4,
		name: 'Banana',
		image: organicFruitImage4,
		price: '$3.99',
		stars: 5,
	},
	{
		id: 5,
		name: 'Blueberry',
		image: organicFruitImage5,
		price: '$3.59',
		stars: 5,
	},
	{
		id: 6,
		name: 'Waffles',
		image: organicFruitImage6,
		price: '$3.99',
		stars: 5,
	},
	{
		id: 7,
		name: 'Waffles',
		image: organicFruitImage7,
		price: '$3.59',
		stars: 5,
	},
	{
		id: 8,
		name: 'Waffles',
		image: organicFruitImage8,
		price: '$2.89',
		stars: 5,
	},
];

export default function ProductSection() {
	return (
		<main className='flex flex-col items-center px-2 sm:px-4 w-full'>
			<h2 className='text-xl tracking-tight mt-12 px-4 sm:px-0 font-semibold relative bg-gradient-to-r from-pink-700 to-pink-950 text-transparent bg-clip-text inline-block'>
				Popular
			</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-4 w-full max-w-6xl px-10 sm:px-4'>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</main>
	);
}
