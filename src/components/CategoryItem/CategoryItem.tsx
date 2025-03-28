import CategoryIcon from '../UI/CategoryIcon';

export default function CategoryItem({ title, Icon }) {
	return (
		<div className='flex flex-col items-center gap-2'>
			<CategoryIcon Icon={Icon} />
			<span className='text-sm text-pink-700'>{title}</span>
		</div>
	);
}
