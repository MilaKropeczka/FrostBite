export const IconButton = ({
	Icon,
	size = 21,
	className = '',
	iconClassName = '',
}) => (
	<div
		className={`bg-gradient-to-l duration-300 px-4 py-3 rounded-xl flex items-center cursor-pointer 
                hover:scale-105 active:scale-95 border border-pink-200 bg-white shadow-xl ${className}`}>
		<Icon size={size} className={`text-pink-800 ${iconClassName}`} />
	</div>
);
