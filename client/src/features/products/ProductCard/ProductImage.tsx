import { Link } from 'react-router-dom';

export function ProductImage({
	id,
	image,
	name,
	className,
}: {
	id: number;
	image: string;
	name: string;
	className?: string;
}) {
	return (
		<Link
			to={`/product/${id}`}
			className={`block w-full h-48 overflow-hidden rounded-t-2xl cursor-pointer ${className}`}>
			<img
				src={image}
				alt={name}
				className='w-full h-full object-cover'
			/>
		</Link>
	);
}
