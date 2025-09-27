import { motion } from 'framer-motion';

export function OrderSkeleton() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.4 }}>
			<li className='bg-pink-100/70 rounded-xl p-4 flex flex-col animate-pulse mt-5'>
				<div className='flex gap-4'>
					<div className='size-18 bg-pink-200 rounded-lg' />
					<div className='flex-1 flex flex-col justify-between gap-3'>
						<div className='flex justify-between items-center'>
							<div className='h-4 w-48 bg-pink-200 rounded' />
							<div className='h-3 w-24 bg-pink-200 rounded' />
						</div>
						<div className='flex justify-between items-center'>
							<div className='h-4 w-28 bg-pink-200 rounded' />
							<div className='h-4 w-28 bg-pink-200 rounded' />
						</div>
						<div className='flex justify-between'>
							<div className='h-3 w-20 bg-pink-200 rounded' />
						</div>
					</div>
				</div>
			</li>
		</motion.div>
	);
}
