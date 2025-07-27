import { BackgroundGradient } from '@/components/UI';
import { StyledTitle } from '@/components/UI';
import { Link } from 'react-router-dom';

export function Header() {
	return (
		<>
			<BackgroundGradient />
			<header className='relative mt-16 md:mt-10 z-10 w-full max-w-xl drop-shadow-xl flex justify-center items-center text-center'>
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
