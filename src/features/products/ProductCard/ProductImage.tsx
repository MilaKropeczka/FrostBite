export function ProductImage({
	image,
	name,
	className,
}: {
	image: string;
	name: string;
	className?: string;
}) {
	return (
		<div
			className={`w-full h-48 overflow-hidden rounded-t-2xl cursor-pointer ${className}`}>
			<img
				src={image}
				alt={name}
				className={`w-full h-full object-cover`}
			/>
		</div>
	);
}
