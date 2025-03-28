export default function CategoryIcon({ Icon }) {
	return (
		<div className='bg-white p-3 inline-flex items-center justify-center text-pink-800 shadow-xl rounded-xl cursor-pointer transform duration-300 hover:-translate-y-1 hover:bg-gray-50 border border-pink-200 active:scale-90'>
			<Icon size={30} />
		</div>
	);
}
