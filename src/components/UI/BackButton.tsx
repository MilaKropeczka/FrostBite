import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function BackButton({ to = '/', label = 'Back' }) {
	return (
		<Link
			to={to}
			className='absolute top-4 left-4 flex items-center gap-2 bg-white bg-opacity-70 rounded-full px-5 py-1 shadow-xl text-pink-700 hover:bg-opacity-90 hover:text-pink-900 font-semibold cursor-pointer'>
			<FiArrowLeft size={20} />
			<span className='leading-relaxed'>{label}</span>
		</Link>
	);
}
