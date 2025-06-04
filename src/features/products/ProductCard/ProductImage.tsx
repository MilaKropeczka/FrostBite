export function ProductImage({ image, name }: { image: string; name: string }) {
	return (
		<div className='w-full h-48 overflow-hidden rounded-t-2xl'>
			<img
				src={image}
				alt={name}
				className='w-full h-full object-cover'
			/>
		</div>
	);
}
