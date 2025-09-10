export const IconButton = ({
	Icon,
	size = 21,
	className = '',
	iconClassName = '',
}) => (
	<div
		className={`bg-gradient-to-l duration-300 px-4 py-3 rounded-xl flex items-center cursor-pointer hover:-translate-y-1 text-pink-800 hover:text-pink-700 active:scale-95 bg-white shadow-lg transition ${className}`}>
		<Icon size={size} className={iconClassName} />
	</div>
);
