import { StyledTitle } from '@/components/UI';
import { Link } from 'react-router-dom';

export function Header() {
	return (
		<>
			<div className='absolute h-74 w-full bg-gradient-to-b from-pink-200/70' />
			<header className='relative mt-16 md:mt-10 z-10 w-full max-w-xl drop-shadow flex justify-center items-center text-center'>
				<Link to='/'>
					<StyledTitle
						mainText='Explore Our'
						highlightedText='Flavours'
					/>
				</Link>
			</header>
		</>
	);
}
