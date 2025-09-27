import { StyledTitle } from '@/components/StyledTitle';
import Link from 'next/link';

export function Header() {
	return (
		<>
			<div className='absolute h-74 w-full bg-gradient-to-b from-pink-200/70' />
			<header className='relative mt-16 md:mt-10 z-10 w-full max-w-xl drop-shadow flex justify-center items-center text-center'>
				<Link href='/'>
					<StyledTitle
						mainText='Explore Our'
						highlightedText='Flavours'
					/>
				</Link>
			</header>
		</>
	);
}
