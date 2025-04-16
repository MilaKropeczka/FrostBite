import CategoryIcon from '@/components/UI/CategoryIcon';
import { CategoryItemProps } from '@/components/CategoryItem/types';

export default function CategoryItem({ title, Icon }: CategoryItemProps) {
	return (
		<div className='flex flex-col items-center gap-2'>
			<CategoryIcon Icon={Icon} />
			<span className='text-sm text-pink-700'>{title}</span>
		</div>
	);
}
