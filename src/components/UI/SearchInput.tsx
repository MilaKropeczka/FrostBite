import { IoMdSearch } from 'react-icons/io';

export const SearchInput = ({ placeholder = 'Search foodstuffs' }) => (
	<div className='relative flex-grow shadow-xl rounded-xl'>
		<IoMdSearch
			size={21}
			className='absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-700 cursor-pointer h-full hover:drop-shadow-xl duration-300 hover:text-pink-600 hover:scale-110 active:scale-90'
		/>
		<input
			type='text'
			placeholder={placeholder}
			className='w-full bg-white px-12 py-3 rounded-xl text-md focus:outline-none focus:ring-2 focus:ring-pink-700 leading-none'
		/>
	</div>
);
