export function FirstTitle({
	title,
	className,
}: {
	title: string;
	className?: string;
}) {
	return (
		<h1 className={`text-2xl font-bold text-pink-800 mt-6 ${className}`}>
			{title}
		</h1>
	);
}
