import { LuIceCreamCone } from 'react-icons/lu';
import { RiCake3Line } from 'react-icons/ri';
import { RiDrinks2Line } from 'react-icons/ri';
import { FiGrid } from 'react-icons/fi';
import { CategoryItem } from '@/components/CategoryItem';
import { useProductFilter } from '@/contexts/ProductFilterContext';
import { Category } from '@/features/products';

const CATEGORIES = [
	{ id: 1, title: 'Explore', emoji: FiGrid },
	{ id: 2, title: Category.Flavours, emoji: LuIceCreamCone },
	{ id: 3, title: Category.Drinks, emoji: RiDrinks2Line },
	{ id: 4, title: Category.Desserts, emoji: RiCake3Line },
];

export function Categories() {
	const { setSelectedCategory } = useProductFilter();

	return (
		<nav className='relative z-10 mt-8 max-w-xl w-full'>
			<div className='w-full flex gap-4 justify-center'>
				{CATEGORIES.map((item) => (
					<button
						key={item.id}
						onClick={() =>
							setSelectedCategory(
								item.title === 'Explore' ? null : item.title
							)
						}>
						<CategoryItem title={item.title} Icon={item.emoji} />
					</button>
				))}
			</div>
		</nav>
	);
}
