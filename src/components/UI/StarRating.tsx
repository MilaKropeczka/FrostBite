import { FaStar } from 'react-icons/fa';

export default function StarRating({ rating }) {
	return (
		<div className='flex items-center justify-center gap-1 text-pink-500'>
			{[...Array(rating)].map((_, index) => (
				<FaStar key={index} className='text-md' />
			))}
			{[...Array(5 - rating)].map((_, index) => (
				<FaStar key={index} className='text-md text-gray-300' />
			))}
			<span>4.2</span>
		</div>
	);
}
