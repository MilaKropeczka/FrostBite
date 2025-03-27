import { FaCartShopping, FaHeart } from 'react-icons/fa6';

export default function Navigate() {
	return (
		<div className='absolute z-10 w-full max-w-xl flex justify-end'>
			<div className=' rounded-xl h-full py-3 flex items-center cursor-pointer text-pink-800 duration-300 hover:-translate-y-1 border border-pink-200 active:scale-90 hover:text-pink-950'>
				<FaCartShopping size={21} />
			</div>
			<div className=' rounded-xl h-full p-3 flex items-center cursor-pointer text-pink-800 duration-300 hover:-translate-y-1 border border-pink-200 active:scale-90 hover:text-pink-950'>
				<FaHeart size={21} />
			</div>
		</div>
	);
}
