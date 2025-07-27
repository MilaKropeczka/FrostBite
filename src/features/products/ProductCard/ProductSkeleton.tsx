import { motion } from 'framer-motion';

export function ProductSkeleton() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 2 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -2 }}
			transition={{ duration: 0.4 }}>
			<div className='bg-pink-100/50 rounded-2xl w-full flex flex-col items-center justify-end mb-3 relative animate-pulse transition-transform duration-300 transform hover:-translate-y-1'>
				<div className='w-full h-48 bg-pink-200 rounded-t-2xl' />
				<div className='text-center py-3 w-full space-y-2 px-4'>
					<div className='h-5 bg-pink-200 rounded w-3/4 mx-auto' />
					<div className='h-4 bg-pink-200 rounded w-1/2 mx-auto' />
					<div className='h-6 bg-pink-200 rounded w-1/3 mx-auto' />
				</div>
				<div className='w-3/4 h-10 bg-pink-200 rounded-xl mb-2' />
			</div>
		</motion.div>
	);
}

