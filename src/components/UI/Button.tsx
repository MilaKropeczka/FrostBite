export default function Button({ children, onClick }) {
	return (
		<button
			className='rounded-xl px-6 py-2 text-white cursor-pointer transition-all duration-200 active:scale-95 w-full max-w-3/4 bg-gradient-to-l from-pink-700 to-pink-800 mb-2 hover:brightness-110'
			onClick={onClick}>
			{children}
		</button>
	);
}
