import { LuIceCreamCone } from 'react-icons/lu';
import { RiCake3Line } from 'react-icons/ri';
import { RiDrinks2Line } from 'react-icons/ri';
import CategoryItem from '@/components/CategoryItem/CategoryItem';
import { Link } from 'react-router-dom';

const CATEGORIES = [
	{ id: 1, title: 'Flavours', emoji: LuIceCreamCone },
	{ id: 2, title: 'Drinks', emoji: RiDrinks2Line },
	{ id: 3, title: 'Desserts', emoji: RiCake3Line },
];

export function Categories() {
	return (
		<nav className='relative z-10 mt-8 max-w-xl w-full'>
			<div className='w-full flex gap-4 justify-center'>
				{CATEGORIES.map((item) => (
					<Link to='categories' key={item.id}>
						<CategoryItem title={item.title} Icon={item.emoji} />
					</Link>
				))}
			</div>
		</nav>
	);
}
