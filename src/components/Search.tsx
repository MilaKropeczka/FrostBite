import { IoMdSearch } from 'react-icons/io';
import { LuSettings2 } from 'react-icons/lu';

export default function Search() {
	return (
		<div className='relative z-10 mt-8 max-w-xl w-full shadow-md text-pink-700 rounded-xl'>
			<IoMdSearch
				size={21}
				className='absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-700  cursor-pointer h-full hover:drop-shadow-md duration-300 hover:text-pink-800 hover:scale-110 active:scale-90'
			/>
			<input
				type='text'
				placeholder='Search foodstuffs'
				className='w-full bg-white px-12 py-3 rounded-xl text-md focus:outline-none focus:ring-2 focus:ring-pink-700 border border-pink-200'
			/>
			<div className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-pink-700 to-pink-800 hover:bg-pink-800 duration-300 h-full px-5 rounded-r-xl flex items-center cursor-pointer hover:scale-105 active:scale-95'>
				<LuSettings2 size={21} className='text-white' />
			</div>
		</div>
	);
}
