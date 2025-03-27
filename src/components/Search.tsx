import { IoMdSearch } from 'react-icons/io';
import { LuSettings2 } from 'react-icons/lu';
import { FaCartShopping, FaHeart } from 'react-icons/fa6';

export default function Search() {
	return (
		<>
			<div className='relative z-10 mt-8 max-w-xl w-full text-pink-700 rounded-xl flex items-center space-x-2 md:space-x-3'>
				<div className='relative flex-grow shadow-xl rounded-xl overflow-hidden'>
					<IoMdSearch
						size={21}
						className='absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-700 cursor-pointer h-full hover:drop-shadow-xl duration-300 hover:text-pink-800 hover:scale-110 active:scale-90'
					/>
					<input
						type='text'
						placeholder='Search foodstuffs'
						className='w-full bg-white px-12 py-3 rounded-xl text-md focus:outline-none focus:ring-2 focus:ring-pink-700 border border-pink-200 leading-none'
					/>
					<div className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-pink-700 to-pink-800 hover:bg-pink-800 duration-300 h-full px-5 rounded-r-xl flex items-center cursor-pointer hover:scale-105 active:scale-95'>
						<LuSettings2 size={21} className='text-white' />
					</div>
				</div>
				<div className='flex items-center space-x-2 sm:space-x-3 h-full'>
					<div className='bg-gradient-to-l duration-300 px-4 py-3 rounded-xl flex items-center cursor-pointer hover:scale-105 active:scale-95 border border-pink-200 bg-white shadow-xl'>
						<FaHeart size={21} className='text-pink-800' />
					</div>
					<div className='bg-gradient-to-l duration-300 px-4 py-3 rounded-xl flex items-center cursor-pointer hover:scale-105 active:scale-95 border border-pink-200 bg-white shadow-xl'>
						<FaCartShopping size={21} className='text-pink-800' />
					</div>
				</div>
			</div>
		</>
	);
}
