import { Button } from '@/components/UI';
import { BackButton } from '@/components/UI';
import { useParams } from 'react-router-dom';
import { products } from '@/data/products';
import { useAddToCart } from '@/hooks/useAddToCart';

export function ProductView() {
	const { productId } = useParams<{ productId: string }>();
	const id = Number(productId);
	const product = products.find((p) => p.id === id);
	const handleAddCart = useAddToCart();

	if (!product) {
		return <div>Produkt nie znaleziony</div>;
	}

	return (
		<div className='flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto mt-10 gap-10 bg-white shadow-2xl rounded-2xl overflow-hidden mb-10'>
			<div className='w-full md:w-1/2 overflow-hidden aspect-[19/20] relative'>
				<img
					src={product?.image}
					alt='iceCream'
					className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
				/>
				<BackButton to='/' />
			</div>

			<div className='w-full md:flex-1 flex flex-col justify-center gap-y-4 px-8 py-6'>
				<h2 className='text-2xl font-semibold text-neutral-900'>
					{product?.name}
				</h2>

				<p className='text-3xl font-bold text-pink-700'>
					${product.price.toFixed(2)}
				</p>

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
					onClick={() => handleAddCart(product)}>
					Purchase Now
				</Button>
			</div>
		</div>
	);
}
