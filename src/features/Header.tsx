import BackgroundGradient from '../components/UI/BackgroundGradient';
import StyledTitle from '../components/UI/StylesTitle';

export default function Header() {
	return (
		<>
			<BackgroundGradient />
			<header className='relative mt-10 z-10 w-full max-w-xl drop-shadow-xl flex justify-center text-center items-center'>
				<StyledTitle
					mainText='Explore Our'
					highlightedText='Flavours'
				/>
			</header>
		</>
	);
}
