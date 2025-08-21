export function SecondTitle({
	title,
	className,
}: {
	title: string;
	className?: string;
}) {
	return (
		<h2 className={`text-xl font-semibold text-pink-700 mb-4 ${className}`}>
			{title}
		</h2>
	);
}
