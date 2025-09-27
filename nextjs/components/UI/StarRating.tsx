import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';

export function StarRating({ rating }) {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating - fullStars >= 0.5;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

	return (
		<div className='flex items-center justify-center gap-1 text-pink-700'>
			{[...Array(fullStars)].map((_, index) => (
				<FaStar key={`full-${index}`} className='text-md' />
			))}
			{hasHalfStar && <FaStarHalf key='half' className='text-md' />}
			{[...Array(emptyStars)].map((_, index) => (
				<FaRegStar
					key={`empty-${index}`}
					className='text-md text-gray-300'
				/>
			))}
			<span className='ml-2'>{rating.toFixed(2)}</span>
		</div>
	);
}
