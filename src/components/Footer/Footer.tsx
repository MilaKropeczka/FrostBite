export default function Footer() {
	return (
		<footer className='h-16 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-200/70  text-pink-900 text-center rounded-t-2xl flex items-center justify-center'>
			<p className='text-sm font-medium'>
				© {new Date().getFullYear()} FrostBite. All rights reserved.
			</p>
		</footer>
	);
}
