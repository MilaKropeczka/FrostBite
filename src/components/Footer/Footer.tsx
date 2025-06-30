export default function Footer() {
	return (
		<>
			<div className='absolute w-full h-16 bg-gradient-to-t from-pink-200 bottom-0' />
			<footer className='relative w-full h-16 text-pink-900 text-center rounded-t-2xl flex items-center justify-center'>
				<p className='text-sm font-medium'>
					© {new Date().getFullYear()} FrostBite. All rights reserved.
				</p>
			</footer>
		</>
	);
}
