import Link from 'next/link';
import Image from 'next/image';

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
			href={`/product/${id}`}
			className={`block w-full h-48 overflow-hidden rounded-t-2xl cursor-pointer ${className}`}>
			<Image
				src={image}
				alt={name}
				width={400}
				height={192}
				className='w-full h-full object-cover'
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
				}}
			/>
		</Link>
	);
}
