import { LuSettings2 } from 'react-icons/lu';

export const SettingsButton = () => (
	<div className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-pink-700 to-pink-800 hover:bg-pink-800 duration-300 h-full px-5 rounded-r-xl flex items-center cursor-pointer active:scale-95'>
		<LuSettings2
			size={21}
			className='text-white hover:text-pink-300 duration-300'
		/>
	</div>
);
